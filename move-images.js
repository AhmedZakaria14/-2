const fs = require('fs');
const path = require('path');

const rootDir = '.';
const targetDir = './public/images/work';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(rootDir);
let counter = 1;

files.forEach(file => {
  if (file.startsWith('WhatsApp Image') && file.endsWith('.jpeg')) {
    const oldPath = path.join(rootDir, file);
    const newPath = path.join(targetDir, `${counter}.jpeg`);
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${file} to ${newPath}`);
    counter++;
  }
});

