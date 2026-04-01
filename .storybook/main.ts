import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
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
  }
};

export default config;