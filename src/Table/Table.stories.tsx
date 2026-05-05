import type { Meta, StoryObj } from '@storybook/react-vite';
import { withCSS } from '../../.storybook/static-css-addon';
import ExampleTableHtml from './Table.stories.data';
import Table from './Table';
import SCSS from './Table.scss?raw'; // Vite-specific syntax


const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'], // This enables automatic documentation generation
  decorators: [withCSS],
  args: {},
  argTypes: {},
  parameters: {
    css: SCSS,
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

// Stories
export const WrappingNativeTable: Story = {
  args: {
    children: ExampleTableHtml()
  },
  parameters: {
    docs: {
      description: {
        story: `
    This version show how this component wraps a regular table and ensures that it is styled correctly.
    In dfo.no's Craft CMS tables are stored as plain html.
    That's why this component is built to handle a plain html table.`
      },
    },
  },
};
