import type { Meta, StoryObj } from '@storybook/react';
import { withCSS } from '../../.storybook/static-css-addon';
import Alertbox from './Alertbox';
import './Alertbox.scss';
import SCSS from './AlertBox.scss?raw'; // Vite-specific syntax


const meta: Meta<typeof Alertbox> = {
  title: 'Components/AlertBox',
  component: Alertbox,
  decorators: [withCSS],
};

export default meta;

type Story = StoryObj<typeof Alertbox>;

export const Default: Story = {
  parameters: {
    css: SCSS, // Inject the raw SCSS content
  },
  args: {
    children: [      
      <>
        <p>This is an important announcement.</p><p>It is perfectly fine to have more than one paragraph.</p><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam urna dui, accumsan a egestas vel, facilisis fermentum enim.
        Nam congue lobortis risus. Praesent vitae dignissim eros. Aenean
        sapien urna, egestas sagittis quam vitae, tempor volutpat eros.</p>
      </>
      ,
    ],
  },
};