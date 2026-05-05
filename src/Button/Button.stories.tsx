import type { Meta, StoryObj } from '@storybook/react-vite';
import { withCSS } from '../../.storybook/static-css-addon';
import { fn } from 'storybook/test'; // Instead of addon-actions
// import { action } from 'storybook/actions'; // Instead of addon-actions
import Button from './Button';
import SCSS from './Button.scss?raw'; // Vite-specific syntax
// TODO: import { text, boolean } from '@storybook/addon-knobs';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  decorators: [withCSS],
  args: {
    onClick: fn(),
  },
  // Optional: Add argTypes for controls, or other Storybook features.
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'Sign up for our newsletter',
    },
    cta: { control: 'boolean' },
    invert: { control: 'boolean' },
    danger: { control: 'boolean' },
    plainLink: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  // Optional: Add global parameters here
  parameters: {
    css: SCSS, // This will apply to all stories
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Stories
export const Basic: Story = {
  args: {
    children: 'Sign up for our newsletter',
  },
};

export const CallToAction: Story = {
  args: {
    cta: true,
    children: 'Sign up for our newsletter',
  },
};

export const InvertedLightVersion: Story = {
  args: {
    invert: true,
    children: 'Sign up for our newsletter',
  },
};

export const DangerButton: Story = {
  args: {
    danger: true,
    children: 'Delete all dem datas 😰',
  },
};

export const CtaLinkDisguisedAsButton: Story = {
  args: {
    plainLink: true,
    cta: true,
    href: '/somewhere',
    children: 'Sign up for our newsletter',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Sign up for our newsletter',
  },
};
