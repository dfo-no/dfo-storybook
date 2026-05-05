import type { Meta, StoryObj } from '@storybook/react-vite';
import { withCSS } from '../../.storybook/static-css-addon';
import Expand from '../Expand/Expand';
import SCSS from '../Expand/Expand.scss?raw'; // Vite-specific syntax

const meta: Meta<typeof Expand> = {
  title: 'Components/Expand',
  component: Expand,
  decorators: [withCSS],
  args: {},
  argTypes: {},
  parameters: {
    css: SCSS, // This will apply to all stories
  },
};

export default meta;

type Story = StoryObj<typeof Expand>;

// Stories
export const Basic: Story = {
  args: {
    title: "I don't know my birth date",
    children: 'Bla bla ukeblad',
  },
};
