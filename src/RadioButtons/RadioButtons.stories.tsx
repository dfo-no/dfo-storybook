import type { Meta, StoryObj } from '@storybook/react';
import { withCSS } from '../../.storybook/static-css-addon';
import RadioButtons from './RadioButtons';
import { Form, Fieldset } from '../index';
import SCSS from './RadioButtons.scss?raw'; // Vite-specific syntax


// Define a type that extends RadioButtonsProps and includes legend
type RadioButtonsStoryArgs = React.ComponentProps<typeof RadioButtons> & {
  legend?: string
};

const meta: Meta<typeof RadioButtons> = {
  title: 'Components/RadioButtons',
  component: RadioButtons,
  decorators: [
    withCSS,
    (Story, context) => (
      <div style={{ maxWidth: '705px' }}>
        <Form>
          <Fieldset legend={context.args.legend || "Er du i en lederstilling?"}>
            <Story {...context}/>
          </Fieldset>
        </Form>
      </div>
    )
  ],
  args: { // Default values for selected properties
    name: 'isLeader',
    options: [
      { label: 'Ja', value: 'yes', defaultChecked: true },
      { label: 'Nei', value: 'no' },
    ],
    legend: 'Er du i en lederstilling?',
  } as RadioButtonsStoryArgs,
  argTypes: { // Defines how each property is controlled in the Storybook UI by type
    legend: {
      control: 'text',
      description: 'The legend text for the Fieldset',
      table: {
        category: 'Fieldset'
      }
    },
    options: {
      control: 'object',
      description: 'An array of radio button objects with `label` and `value` properties',
    },
  },
  parameters: {
    css: [SCSS],
  },
} as Meta<RadioButtonsStoryArgs>;

export default meta;

type Story = StoryObj<typeof RadioButtons>;

// Stories
export const WithLegend: Story = {};
