import React from 'react';
import { Input } from '..';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?!../Input/Input.scss'),
  /* eslint-enable import/no-webpack-loader-syntax */
};

export default {
  title: 'Text field',
  component: Input,
  parameters: {
    ...options,
  },
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    asterisk: { control: 'boolean' },
  },
};

const Template = (args) => (
  <div style={{ maxWidth: '705px' }}>
    <Input {...args} />
  </div>
);

export const NormalState = Template.bind({});
NormalState.args = {
  label: 'Fornavn:',
  name: 'firstName',
  type: 'text',
};

export const WithRequired = Template.bind({});
WithRequired.args = {
  label: 'Fornavn:',
  name: 'firstName',
  type: 'text',
  asterisk: true,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Fornavn:',
  name: 'firstName',
  error: 'Vennligst fyll ut fornavn',
  type: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Fornavn:',
  name: 'firstName',
  type: 'text',
  disabled: true,
};
