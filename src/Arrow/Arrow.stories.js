import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, boolean } from '@storybook/addon-knobs';

import { Arrow } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?!./Arrow.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('Arrow', module)
  .add(
    'Arrow',
    () => (
      <Arrow
        fill={color('fill color', '#032b4a')}
        large={boolean('Large', false)}
        active={boolean('Active', false)}
      />
    ),
    options,
  );
