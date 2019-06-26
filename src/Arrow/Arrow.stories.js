import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, color, boolean } from '@storybook/addon-knobs';

import { withCSS } from '../../.storybook/static-css-addon';
import { Arrow } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Arrow.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('Arrow', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
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
