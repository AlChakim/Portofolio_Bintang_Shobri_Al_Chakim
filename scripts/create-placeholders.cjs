const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Helper to create a valid minimal PNG of width W, height H with RGB color
function createPNG(width, height, r, g, b) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 2; // color type: truecolor (RGB)
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // Raw image data: filter byte 0 followed by width * 3 bytes per scanline
  const scanlineLength = 1 + width * 3;
  const rawData = Buffer.alloc(scanlineLength * height);
  for (let y = 0; y < height; y++) {
    const rowOffset = y * scanlineLength;
    rawData[rowOffset] = 0; // filter type None
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 3;
      // create a subtle border / gradient pattern
      const isBorder = (x < 4 || x >= width - 4 || y < 4 || y >= height - 4);
      if (isBorder) {
        rawData[pixelOffset] = Math.min(255, r + 40);
        rawData[pixelOffset + 1] = Math.min(255, g + 40);
        rawData[pixelOffset + 2] = Math.min(255, b + 40);
      } else {
        rawData[pixelOffset] = r;
        rawData[pixelOffset + 1] = g;
        rawData[pixelOffset + 2] = b;
      }
    }
  }

  const deflated = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', deflated);

  // IEND chunk
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function makeChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typeBuf = Buffer.from(type, 'ascii');
  const crcData = Buffer.concat([typeBuf, data]);

  const crc = crc32(crcData);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc, 0);

  return Buffer.concat([length, typeBuf, data, crcBuf]);
}

// CRC32 table
let crcTable = null;
function getCrcTable() {
  if (crcTable) return crcTable;
  crcTable = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) {
        c = 0xedb88320 ^ (c >>> 1);
      } else {
        c = c >>> 1;
      }
    }
    crcTable[n] = c;
  }
  return crcTable;
}

function crc32(buf) {
  const table = getCrcTable();
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const files = [
  { path: 'public/images/profile/profile-photo-placeholder.png', w: 400, h: 400, r: 15, g: 23, b: 42 },
  { path: 'public/images/maestro/maestro-prototype-placeholder.png', w: 800, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/maestro/maestro-dashboard-placeholder.png', w: 800, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/maestro/maestro-vr-placeholder.png', w: 800, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/maestro/maestro-architecture-placeholder.png', w: 1000, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/aqua-eye/aqua-eye-prototype-placeholder.png', w: 800, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/aqua-eye/aqua-eye-competition-placeholder.png', w: 800, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/component-detection/component-detection-placeholder.png', w: 800, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/mandor/mandor-prototype-placeholder.png', w: 800, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/robotics/robotics-placeholder.png', w: 800, h: 450, r: 15, g: 23, b: 42 },
  { path: 'public/images/certificates/innovation-4force-2026-placeholder.png', w: 800, h: 560, r: 15, g: 23, b: 42 },
  { path: 'public/images/certificates/samsung-solve-for-tomorrow-placeholder.png', w: 800, h: 560, r: 15, g: 23, b: 42 },
];

for (const file of files) {
  const fullPath = path.resolve(__dirname, '..', file.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  const pngBuf = createPNG(file.w, file.h, file.r, file.g, file.b);
  fs.writeFileSync(fullPath, pngBuf);
  console.log(`Created: ${file.path}`);
}
console.log('All image placeholders generated successfully.');

