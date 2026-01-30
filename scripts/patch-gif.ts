
import fs from 'fs';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public/owl-gif.gif');
const outputPath = path.join(process.cwd(), 'public/owl-once.gif');

try {
    const buffer = fs.readFileSync(inputPath);

    // Search for the Netscape Application Extension for looping
    // Signature: 21 FF 0B 'NETSCAPE2.0' (03 01)
    const NETSCAPE = Buffer.from([0x21, 0xFF, 0x0B, 0x4E, 0x45, 0x54, 0x53, 0x43, 0x41, 0x50, 0x45, 0x32, 0x2E, 0x30]);

    let found = false;
    let offset = 0;

    while (offset < buffer.length - NETSCAPE.length) {
        if (buffer.subarray(offset, offset + NETSCAPE.length).equals(NETSCAPE)) {
            // Found the extension block header
            // The next bytes should be the sub-block length (03) and ID (01), then loop count
            const startOfData = offset + NETSCAPE.length;

            // Check for sub-block size 0x03 and ID 0x01
            if (buffer[startOfData] === 0x03 && buffer[startOfData + 1] === 0x01) {
                // The loop count is at startOfData + 2 and startOfData + 3 (little-endian)
                const currentLoopCount = buffer.readUInt16LE(startOfData + 2);
                console.log(`Found loop count: ${currentLoopCount} at offset ${startOfData + 2}`);

                // Change loop count to 1 (play once) if it was infinite (0)
                // Or ensure it is 1 regardless
                buffer.writeUInt16LE(1, startOfData + 2);
                console.log('Modified loop count to 1');
                found = true;
                break;
            }
        }
        offset++;
    }

    if (!found) {
        console.log('Netscape Application Extension not found. The GIF might not loop by default, or uses a different extension.');
        // If not found, inserting it is complex as we need to find the right place (after logical screen descriptor/color table)
        // For now, just copy it and assume it plays once if no block.
    }

    fs.writeFileSync(outputPath, buffer);
    console.log(`Saved modified GIF to ${outputPath}`);

} catch (error) {
    console.error('Error processing GIF:', error);
    process.exit(1);
}
