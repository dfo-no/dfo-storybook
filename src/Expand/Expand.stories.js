import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import { withCSS } from '../../.storybook/static-css-addon';
import { Expand } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Expand.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('Expand', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    'Basic',
    () => (
      <Expand title="I don't know my birth date">
        Bla bla ukeblad
      </Expand>
    ),
    options,
  );
