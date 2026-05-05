// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../.storybook/pages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    // "@storybook/addon-interactions",  // For interaction testing
    "@storybook/addon-a11y",          // Keep if you use accessibility testing
    "@storybook/addon-links",         // Keep if you use links
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-docs",
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  viteFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@': path.resolve(__dirname, '../'),
      },
    };
    // return config;
    return mergeConfig(config, {
      plugins: [svgr()], // Ensure SVGR is applied in SB
    })
  },
};

export default config;