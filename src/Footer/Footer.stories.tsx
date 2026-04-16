import type { Meta, StoryObj } from '@storybook/react';
import { withCSS } from '../../.storybook/static-css-addon';
import Footer from './Footer';
import SCSS from './Footer.scss?raw'; // Vite-specific syntax


const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  decorators: [withCSS],
  args: {
    links: [
      { title: 'Link title', uri: '/' },
      { title: 'Link title', uri: '/' },
      { title: 'Link title', uri: '/' },
    ],
  },
  argTypes: {
    links: {
      control: 'object',
      description: 'An array of link objects with `title` and `uri` properties',
    },
  },
  parameters: {
    css: SCSS
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

// Stories
export const FooterWithLinks: Story = {
  // `render` may be omitted if we're using the default rendering behavior
};

export const FooterWithoutLinks: Story = {
  args: {
    links: null
  }
};
