import type { Meta, StoryObj } from '@storybook/react-vite';
import { withCSS } from '../../.storybook/static-css-addon';
import Input from './Input';
import SCSS from './Input.scss?raw'; // Vite-specific syntax


const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  decorators: [
    withCSS,
    (Story) => (
      <div style={{ maxWidth: '750px' }}>
        <Story />
      </div>
    ),
  ],
  args: { // Default values for selected properties
    label: 'Fornavn',
    name: 'firstName',
    type: 'text',
  },
  argTypes: { // Defines how each property is controlled in the Storybook UI by type
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    name: {
      control: 'text',
      description: 'Type of the input field (e.g., text, password, email)',
    },
    type: {
      control: 'text',
      description: 'Type of the input field (e.g., text, password, email)',
    },
    asterisk: {
      control: 'boolean',
      description: 'Show an asterisk to indicate the field is required',
    },
    error: {
      control: 'text',
      description: 'Error message to display below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input field',
    },
  },
  parameters: {
    css: [SCSS],
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Stories
export const NormalState: Story = {};

export const WithRequired: Story = {
  args: {
    asterisk: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Vennligst fyll ut fornavn.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
