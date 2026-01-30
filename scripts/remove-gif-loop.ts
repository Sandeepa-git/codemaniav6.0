
import fs from 'fs';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public/owl-gif.gif');
const outputPath = path.join(process.cwd(), 'public/owl-once.gif');

try {
    const buffer = fs.readFileSync(inputPath);
    console.log(`Original size: ${buffer.length}`);

    // Signature for NETSCAPE2.0 Loop Extension
    // 21 FF 0B 'NETSCAPE2.0' (03 01)
    const pattern = Buffer.from([0x21, 0xFF, 0x0B, 0x4E, 0x45, 0x54, 0x53, 0x43, 0x41, 0x50, 0x45, 0x32, 0x2E, 0x30, 0x03, 0x01]);

    let foundOffset = -1;

    // Naive search
    for (let i = 0; i < buffer.length - pattern.length - 3; i++) {
        if (buffer.subarray(i, i + pattern.length).equals(pattern)) {
            // Check for block terminator 0x00 at the end of the full block (pattern + 2 bytes count + 1 byte terminator)
            // pattern length is 16.
            // We expect next 2 bytes to be loop count.
            // Next byte after that (offset + 18) to be 0x00.
            if (buffer[i + 18] === 0x00) {
                foundOffset = i;
                console.log(`Found complete NETSCAPE2.0 block at offset ${i}`);
                break;
            }
        }
    }

    if (foundOffset !== -1) {
        // The block is 19 bytes long (16 for pattern + 2 for count + 1 for terminator)
        const blockSize = 19;

        // Create new buffer without this block
        const newBuffer = Buffer.concat([
            buffer.subarray(0, foundOffset),
            buffer.subarray(foundOffset + blockSize)
        ]);

        console.log(`New size: ${newBuffer.length}`);
        fs.writeFileSync(outputPath, newBuffer);
        console.log(`Successfully created ${outputPath} without loop block.`);
    } else {
        console.log('Could not find NETSCAPE2.0 loop block.');
        // Just copy the original if not found
        fs.copyFileSync(inputPath, outputPath);
    }

} catch (error) {
    console.error('Error:', error);
}
