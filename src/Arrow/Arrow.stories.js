import React from 'react';
import { Arrow } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?!./Arrow.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

export default {
  title: 'Arrow',
  component: Arrow,
  parameters: [
    options
  ],
  argTypes: {
    fill: { control: 'color', description: 'Color of the arrow' },
    large: { control: 'boolean', description: 'Use a larger version of the arrow' },
    active: { control: 'boolean', description: 'Indicates if the arrow is in an active state' },
  },
}

const Template = (args) => <Arrow {...args} />;

export const Default = Template.bind({});
Default.args = {
  fill: '#032b4a',
  large: false,
  active: false
};
