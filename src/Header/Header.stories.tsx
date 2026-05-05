import type { Meta, StoryObj } from '@storybook/react-vite';
import { withCSS } from '../../.storybook/static-css-addon';
import { fn } from 'storybook/test';
import Header from './Header';
import SCSS from './Header.scss?raw';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'], // This enables automatic documentation generation
  decorators: [withCSS],
  args: {},
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls the open/close state of the header',
    },
    onEvent: {
      description: 'Callback function for header events',
      action: 'header-event', // This will log the action in the Actions panel
    },
    links: {
      control: 'object',
      description: 'Array of link objects with `link` and `title` properties',
    },
  },
  parameters: {
    css: [SCSS], // This will apply to all stories
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

// Stories
export const HeaderWithLinks: Story = {
  args: {
    links: [
      { link: 'url1', title: 'Link title 1' },
      { link: 'url2', title: 'Link title 2' },
      { link: 'url3', title: 'Link title 3' },
    ],
  },
};

export const ControlledHeader: Story = {
  args: {
    links: [
      { link: 'url1', title: 'Link title 1' },
      { link: 'url2', title: 'Link title 2' },
      { link: 'url3', title: 'Link title 3' },
    ],
    isOpen: false,
    onEvent: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: `
  Sometimes it is desirable to make a component into a
  controlled component, which gives us full control of
  the header state.

  If the header component sees a 'isOpen' property it
  will skip using internal state for that and only wait
  for changes to its isOpen prop.

  Developers can then decide whether or not it should
  be open or closed by passing a callback function to
  the onEvent property and reacting to custom events.

  See also:
  https://reactjs.org/docs/forms.html#controlled-components
        `,
      },
    },
  },
};

export const HeaderLanguagesRedirect: Story = {
  args: {
    links: [
      { link: 'url1', title: 'Link title 1' },
      { link: 'url2', title: 'Link title 2' },
      { link: 'url3', title: 'Link title 3' },
    ],
    languages: [
      { languageCode: 'no', title: 'Norsk', link: '/no' },
      { languageCode: 'en', title: 'English', link: '/en', isActive: true },
    ],
    isOpen: false,
    onEvent: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: `Some sites change language by url navigation.`
      },
    },
  },
};

export const HeaderLanguagesOnClick: Story = {
  args: {
    links: [
      { link: 'url1', title: 'Link title 1' },
      { link: 'url2', title: 'Link title 2' },
      { link: 'url3', title: 'Link title 3' },
    ],
    languages: [
      { languageCode: 'no', title: 'Norsk', link: '/no', isActive: true },
      { languageCode: 'en', title: 'English', link: '/en' },
    ],
    onEvent: fn((...args) => console.log('Custom action name:', ...args)),
  },
  parameters: {
    docs: {
      description: {
        story: `Some sites change language not by url redirect, but 'in-place' state changes.`
      },
    },
  },
};
