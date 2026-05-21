const fs = require('node:fs');
const crypto = require('node:crypto');
const path = require('node:path');

// Recursively get all files under a directory
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, files);
    } else {
      files.push(filePath);
    }
  }
  return files;
}

// Gather all source files that define the app's visual, structural, and behavioral state
const filesToHash = [
  'index.html',
  'app.js',
  'styles.css',
  'input.css',
  'tailwind.config.js',
  'theme-init.js',
  'loader.js',
  'pwa/manifest.webmanifest'
];

if (fs.existsSync('js')) {
  getFiles('js').forEach(f => {
    if (path.basename(f) !== 'version.js') {
      filesToHash.push(f);
    }
  });
}

if (fs.existsSync('pwa/icons')) {
  getFiles('pwa/icons').forEach(f => filesToHash.push(f));
}

if (fs.existsSync('pwa/fonts')) {
  getFiles('pwa/fonts').forEach(f => filesToHash.push(f));
}

// Sort the list to make sure we hash files in a deterministic order
filesToHash.sort((a, b) => a.localeCompare(b));

const hash = crypto.createHash('md5');

for (const file of filesToHash) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file);
    hash.update(content);
  }
}

const tag = hash.digest('hex').substring(0, 8);

const sw = fs.readFileSync('sw.js', 'utf8');
const updated = sw.replace(/brujula-emocional-\w+/, `brujula-emocional-${tag}`);
fs.writeFileSync('sw.js', updated);
fs.writeFileSync('js/version.js', `export const BUILD_VERSION = "${tag}";\n`);
console.log(`SW → brujula-emocional-${tag}`);

