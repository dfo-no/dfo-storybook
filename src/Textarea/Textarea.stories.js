import React from 'react';
import { Fieldset, Textarea } from '..';

export default {
  title: 'Textarea',
  component: Textarea,
  parameters: {
    css: require('!to-string-loader!css-loader!sass-loader?!../Textarea/Textarea.scss'),
  },
  argTypes: {
    autosize: { control: 'boolean', description: 'Autosize the textarea to fit content' },
    label: { control: 'text', description: 'Label for the textarea' },
    error: { control: 'text', description: 'Error message to display' },
    asterisk: { control: 'boolean', description: 'Display an asterisk for required fields' },
  },
};

const Template = (args) => <Fieldset {...args} />;

export const Default = Template.bind({});

Default.args = {
  autosize: true,
  label: 'What about dat Lorem ipsum?',
  error: 'error message',
  text: [
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
  ].join('')
};

export const TextareaWithRequired = Template.bind({});

TextareaWithRequired.args = {
  autosize: true,
  label: 'What about dat Lorem ipsum?',
  error: 'error message',
  asterisk: true,
  text: [
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
  ].join('')
};
