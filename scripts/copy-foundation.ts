// scripts/copy-foundation.ts
// Sets the relative path to foundation.scss depending on the location of the consumer script.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the equivalent of __dirname in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Source and destination paths
const copyJobs = [
  {
    srcPath: path.join(__dirname, '../src/sass/base/_foundation.prod-lib-sass.scss'),
    destDir: path.join(__dirname, '../dist/lib/sass/base')
  },
  {
    srcPath: path.join(__dirname, '../src/sass/base/_foundation.prod-sass.scss'),
    destDir: path.join(__dirname, '../dist/sass/base'),
  }
];

// Loop desinations
copyJobs.forEach((job) => {
  // Create destination path
  const destPath = path.join(job.destDir, '_foundation.scss');
  
  // Ensure destination directory exists
  if (!fs.existsSync(job.destDir)) {
    fs.mkdirSync(job.destDir, { recursive: true });
  }
  
  // Copy and rename the file
  fs.copyFileSync(job.srcPath, destPath);
  
  console.log(`Copied and renamed\n FROM: ${job.srcPath}\n   TO: ${destPath}`);
});

console.log(`${copyJobs.length} copy operation(s) done.`);
