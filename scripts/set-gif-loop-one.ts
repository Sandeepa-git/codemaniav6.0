
import fs from 'fs';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public/owl-gif.gif');
const outputPath = path.join(process.cwd(), 'public/owl-play-once.gif');

try {
    const buffer = fs.readFileSync(inputPath);
    console.log(`Original size: ${buffer.length}`);

    // Signature for NETSCAPE2.0 Loop Extension
    // 21 FF 0B 'NETSCAPE2.0' (03 01)
    const pattern = Buffer.from([0x21, 0xFF, 0x0B, 0x4E, 0x45, 0x54, 0x53, 0x43, 0x41, 0x50, 0x45, 0x32, 0x2E, 0x30, 0x03, 0x01]);

    let foundOffset = -1;

    for (let i = 0; i < buffer.length - pattern.length - 2; i++) {
        if (buffer.subarray(i, i + pattern.length).equals(pattern)) {
            foundOffset = i;
            console.log(`Found NETSCAPE2.0 block at offset ${i}`);

            // The next 2 bytes are the loop count (little-endian)
            const loopCountOffset = i + pattern.length;
            const currentLoopCount = buffer.readUInt16LE(loopCountOffset);
            console.log(`Current loop count: ${currentLoopCount}`);

            // Update to 1 (play once)
            buffer.writeUInt16LE(1, loopCountOffset);
            console.log(`Updated loop count to 1`);
            break;
        }
    }

    if (foundOffset === -1) {
        console.log('NETSCAPE2.0 loop block not found. Cannot patch.');
        // In a real scenario, we would insert the block here, but we know owl-gif.gif has it from previous steps.
    }

    fs.writeFileSync(outputPath, buffer);
    console.log(`Saved patched GIF to ${outputPath}`);

} catch (error) {
    console.error('Error:', error);
}
