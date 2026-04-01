import type { Meta, StoryObj } from '@storybook/react';
import { withCSS } from '../../.storybook/static-css-addon';
import Arrow from './Arrow';
import './Arrow.scss';
import SCSS from './Arrow.scss?raw'; // Vite-specific syntax
// TODO: import { color, boolean } from '@storybook/addon-knobs';

const meta: Meta<typeof Arrow> = {
  title: 'Components/Arrow',
  component: Arrow,
  decorators: [withCSS]
};

export default meta;

type Story = StoryObj<typeof Arrow>;

export const Default: Story = {
  parameters: {
    css: SCSS,
  },
  args: {
    fill: '#032b4a',
    large: false,
    active: false,
  },
};
