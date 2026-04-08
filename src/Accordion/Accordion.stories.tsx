import type { Meta, StoryObj } from '@storybook/react';
import { withCSS } from '../../.storybook/static-css-addon';
import Accordion from './Accordion';
import SCSS from './Accordion.scss?raw'; // Vite-specific syntax

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [withCSS],
  // Optional: Add argTypes for controls, or other Storybook features.
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Stories
export const Default: Story = {
  parameters: {
    css: SCSS,
  },
  args: {
    panels: [
      {
        heading: 'Something vague about the role structure',
        id: '1',
        content: <p>Text in an accordion panel</p>,
      },
      {
        heading: 'Function roles',
        id: '2',
        content: (
          <p>
            Really <strong>important</strong> content in bold
          </p>
        ),
      },
      {
        heading: 'Basis roles',
        id: '3',
        content: <p>Something about something in here</p>,
      },
    ],
    onPanelClicked: () => console.log('Panel clicked'), // Replace with your action or mock function
  },
};
