import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?!./Button.scss'),
  /* eslint-enable import/no-webpack-loader-syntax */
};

export default {
  title: 'Button',
  component: Button,
  parameters: {
    ...options,
  },
  argTypes: {
    children: { control: 'text' },
    cta: { control: 'boolean' },
    invert: { control: 'boolean' },
    danger: { control: 'boolean' },
    plainLink: { control: 'boolean' },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: 'Sign up for our newsletter',
  onClick: action('clicked'),
};

export const CallToAction = Template.bind({});
CallToAction.args = {
  children: 'Sign up for our newsletter',
  cta: true,
  onClick: action('clicked'),
};

export const InvertedLightVersion = Template.bind({});
InvertedLightVersion.args = {
  children: 'Sign up for our newsletter',
  invert: true,
  onClick: action('clicked'),
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Delete all dem datas 😰',
  danger: true,
  onClick: action('clicked'),
};

export const CTALinkDisguisedAsButton = Template.bind({});
CTALinkDisguisedAsButton.args = {
  children: 'Sign up for our newsletter',
  plainLink: true,
  cta: true,
  href: '/somewhere',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Sign up for our newsletter',
  disabled: true,
  onClick: action('clicked'),
};
