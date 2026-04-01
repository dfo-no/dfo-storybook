// scripts/generate-version.ts
import fs from 'fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const packageJson = require('../package.json');

fs.writeFileSync(
  'src/version.ts',
  `export const version = '${packageJson.version}';\n`
);