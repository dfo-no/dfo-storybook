import type { Meta, StoryObj } from '@storybook/react-vite';
import { withCSS } from '../../.storybook/static-css-addon';
import Fieldset from '../Form/Fieldset';
import Textarea from './Textarea';
import SCSS from './Textarea.scss?raw'; // Vite-specific syntax


const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: [withCSS],
  args: {
    name: 'such-text',
    autosize: true,
    label: 'What about dat Lorem ipsum?',
    error: '',
    value: [
      'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
      'It has roots in a piece of classical Latin literature from 45 BC, ',
      'making it over 2000 years old. Richard McClintock, a Latin ',
      'professor at Hampden-Sydney College in Virginia, looked up one of ',
      'the more obscure Latin words, consectetur, from a Lorem Ipsum ',
      'passage, and going through the cites of the word in classical ',
      'literature, discovered the undoubtable source. Lorem Ipsum comes ',
      'from sections 1.10.32 and 1.10.33 of «de Finibus Bonorum et ',
      'Malorum» (The Extremes of Good and Evil) by Cicero, written in 45 ',
      'BC. This book is a treatise on the theory of ethics, very popular ',
      'during the Renaissance.',
    ].join(''),
    onChange: () => {},
  },
  argTypes: { // Use argTypes instead of the older addon-knobs
    name: { control: 'text' },
    autosize: { control: 'boolean' },
    label: { control: 'text' },
    error: { control: 'text' },
    asterisk: { control : 'boolean'},
  },
  parameters: {
    css: SCSS,
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

// Stories (CSF: Component Story Format)
export const TextareaNormal: Story = {
  render: (args) => (
    <Fieldset>
      <Textarea {...args} />
    </Fieldset>
  ),
};

export const TextareaRequired: Story = {
  args: {
    asterisk: true,
    // Inherits other args (name, autosize, label, error, value, onChange) from meta
  },
  render: (args) => (
    <Fieldset>
      <Textarea {...args} />
    </Fieldset>
  ),
};
