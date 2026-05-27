// scripts/generate-version.ts
import fs from 'fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const packageJson = require('../package.json');

fs.writeFileSync(
  'src/versions.ts',
  `export const dfo_version = '${packageJson.version}';\n` +
  `export const react_version = '${packageJson.dependencies.react}';\n` +
  `export const storybook_version = '${packageJson.devDependencies.storybook}';\n` +
  ``
);