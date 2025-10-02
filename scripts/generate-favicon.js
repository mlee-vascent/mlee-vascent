const fs = require('node:fs');
const path = require('node:path');

async function main() {
  const pngUrl = 'https://cdn.builder.io/api/v1/image/assets/4142780b5a85442faddc1827c5dbc44f/b72888cfb986457bba20a827b2b43604?format=png&width=256';
  const res = await fetch(pngUrl);
  if (!res.ok) throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
  const pngBuf = Buffer.from(await res.arrayBuffer());

  const publicDir = path.resolve(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const pngPath = path.join(publicDir, 'favicon.png');
  fs.writeFileSync(pngPath, pngBuf);

  // Build ICO file with a single PNG entry (256x256)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);   // reserved
  header.writeUInt16LE(1, 2);   // ICO type
  header.writeUInt16LE(1, 4);   // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(0, 0);       // width (0 => 256)
  entry.writeUInt8(0, 1);       // height (0 => 256)
  entry.writeUInt8(0, 2);       // color palette
  entry.writeUInt8(0, 3);       // reserved
  entry.writeUInt16LE(1, 4);    // color planes
  entry.writeUInt16LE(32, 6);   // bits per pixel
  entry.writeUInt32LE(pngBuf.length, 8); // size of PNG data
  entry.writeUInt32LE(22, 12);  // offset to image data (6 + 16)

  const icoBuf = Buffer.concat([header, entry, pngBuf]);
  const icoPath = path.join(publicDir, 'favicon.ico');
  fs.writeFileSync(icoPath, icoBuf);

  console.log('Generated:', { pngPath, icoPath, sizes: '256x256' });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
