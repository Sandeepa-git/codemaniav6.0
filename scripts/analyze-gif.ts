
import fs from 'fs';
import path from 'path';

const inputPath = path.join(process.cwd(), 'public/owl-gif.gif');

try {
    const buffer = fs.readFileSync(inputPath);
    console.log(`File size: ${buffer.length}`);

    // Search for the Netscape Application Extension for looping
    // Signature: 21 FF 0B 'NETSCAPE2.0' (03 01)
    const NETSCAPE = Buffer.from([0x21, 0xFF, 0x0B, 0x4E, 0x45, 0x54, 0x53, 0x43, 0x41, 0x50, 0x45, 0x32, 0x2E, 0x30]);

    let found = false;
    let offset = 0;

    while (offset < buffer.length - NETSCAPE.length) {
        if (buffer.subarray(offset, offset + NETSCAPE.length).equals(NETSCAPE)) {
            console.log(`Found NETSCAPE block at offset: ${offset}`);

            const startOfData = offset + NETSCAPE.length;
            console.log(`Data starts at: ${startOfData}`);

            console.log(`Bytes at start of data: ${buffer[startOfData].toString(16)} ${buffer[startOfData + 1].toString(16)}`);

            if (buffer[startOfData] === 0x03 && buffer[startOfData + 1] === 0x01) {
                const loopCount = buffer.readUInt16LE(startOfData + 2);
                console.log(`Current loop count: ${loopCount}`);
                found = true;
            } else {
                console.log('Unexpected sub-block structure.');
            }
        }
        offset++;
    }

    if (!found) {
        console.log('NETSCAPE2.0 extension not found.');
    }
} catch (error) {
    console.error('Error:', error);
}
