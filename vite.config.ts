// https://vite.dev/config/
/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sassPlugin from 'vite-plugin-sass-dts';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react({  // This plugin handles JSX transformation
      jsxRuntime: 'automatic',  // or 'classic' for older React
    }),
    svgr(),
    sassPlugin(),
  ],
  build: {
    outDir: 'dist/lib', // Output to dist/lib/ in the project root
    emptyOutDir: false,  // Don't clear dist/lib (TSC has already written files there)
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'), // Entry point of your library
      name: 'DFOComponents', // Global variable name (if used in UMD)
      formats: ['es'], // Output ESM (matches your "type": "module")
      fileName: (format) => `index.${format}.js`, // Output filename
    },
    rollupOptions: {
      // Ensure external dependencies (React, etc.) are not bundled
      external: ['react', 'react-dom', 'classnames'],
      output: {
        // Preserve directory structure for SCSS files
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Add any global SCSS variables or mixins here
        additionalData: `
          // Global variables or mixins here (if needed)
        `,
        quietDeps: true, // Silences all deprecation warnings from node_modules. TODO: REMOVE suppression when package foundation-sites are migrated/updated to modern syntax i.e. not using deprecated Dart Sass syntax. At point-in-time foundation-sites is v6.9.0.
        silenceDeprecations: ['import', 'legacy-js-api', 'global-builtin'], // TODO: Remove later. See above.
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(dirname, './'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.stories.tsx'],
  },
  server: {
    fs: {
      // Allow serving files from any directory
      allow: ['..'],
    },
  },
  test: {
    projects: [
      {
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook')
          }),
        ],
        test: {
          name: 'storybook',        
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{
              browser: 'chromium'
            }]
          }
        }      
      }
    ]
  }
});