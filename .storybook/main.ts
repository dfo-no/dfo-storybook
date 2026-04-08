import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

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
        '@': path.resolve(dirname, '../'),
      },
    };
    return config;
  },
};

export default config;