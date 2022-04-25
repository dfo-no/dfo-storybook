import React from 'react';
import { storiesOf } from '@storybook/react';

import { Expand } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?!./Expand.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('Expand', module)
  .add(
    'Basic',
    () => (
      <Expand title="I don't know my birth date">
        Bla bla ukeblad
      </Expand>
    ),
    options,
  );
