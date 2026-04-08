import type { Preview } from '@storybook/react';
import { DarkBackground, Padding } from './stories.decorators';
// import { ShowStaticMarkup } from './stories.decorators';
import { withCSS } from './static-css-addon';
import '../sass/main.scss';
import { background } from 'storybook/theming';


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
      theme: {
        brandTitle: 'github repo',
        brandUrl: 'https://github.com/dfo-no/dfo-storybook'
      },
    },
  },
  decorators: [
    // DarkBackground,
    // Padding,
    withCSS,
    // ShowStaticMarkup,
  ],
};

export default preview;