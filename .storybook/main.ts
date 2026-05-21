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
  staticDirs: [ // Explicitly define static directories
    '../public' // Serves files from the project's public/ directory
  ],
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

    return mergeConfig(config, {
      plugins: [svgr()], // Ensure SVGR is applied in SB
      esbuild: {
        // Ensure JSX is handled by esbuild (fallback for Vite)
        jsx: 'automatic',
      },
      css: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api', 'global-builtin'], // Suppress deprecation warnings from dependencies. TODO: Remove when foundation-sites is updated to modern sass.
        preprocessorOptions: {
          // Add Sass include paths:
          scss: {
            loadPaths: [
              path.resolve(__dirname, '../node_modules'),
              path.resolve(__dirname, '../'),
            ],
          },
        },
      },
    })
  },
};

export default config;