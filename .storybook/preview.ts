import type { Preview } from '@storybook/react-vite';
// import { DarkBackground, Padding } from './stories.decorators';
import { withCSS } from './static-css-addon'; // Decorator
import { withStaticMarkup } from './static-markup-addon'; // Decorator
// import '../src/sass/main.scss';
import '../src/sass/main.scss';
import { create } from 'storybook/theming';

const customTheme = create({
  base: 'light', // or 'dark'
  brandTitle: 'GitHub Repo',
  brandUrl: 'https://github.com/dfo-no/dfo-storybook',
  brandImage: '', // Optional: URL to your logo image
  colorPrimary: '#3A10E5', // Primary color for interactive elements
  colorSecondary: '#585C6D', // Secondary color for interactive elements
  appBg: '#FFFFFF', // Background color of the Storybook app
  appContentBg: '#FFFFFF', // Background color of the content area
  appBorderColor: '#585C6D', // Border color for UI elements
  appBorderRadius: 4, // Border radius for UI elements
  fontBase: '"Open Sans", sans-serif', // Base font family
  fontCode: 'monospace', // Font family for code blocks
  textColor: '#10162F', // Default text color
  textInverseColor: '#FFFFFF', // Text color for inverted backgrounds
  barTextColor: '#9E9E9E', // Text color for the toolbar
  barSelectedColor: '#585C6D', // Color for selected items in the toolbar
  barBg: '#FFFFFF', // Background color for the toolbar
  inputBg: '#FFFFFF', // Background color for input fields
  inputBorder: '#10162F', // Border color for input fields
  inputTextColor: '#10162F', // Text color for input fields
  inputBorderRadius: 2, // Border radius for input fields
});

const preview: Preview = {
  parameters: {
    actions: { argTypeRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#012a4c' },
      ],
    },

    options: {
      storySort: {
        order: ['Welcome', 'Typography', 'Colors'],
      },
    },

    docs: {
      theme: customTheme,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
  decorators: [
    // DarkBackground,
    // Padding,
    withCSS,
    withStaticMarkup,
  ],
};

export default preview;
