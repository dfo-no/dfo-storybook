import React from 'react';
import { storiesOf } from '@storybook/react';

import { Alertbox } from '.';

storiesOf('Alertbox', module)
  .add(
    'Alertbox',
    () => (
      <Alertbox>
        <p>This is an important announcement.</p>
        <p>It is perfectly fine to have more than one paragraph.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam urna dui, accumsan a egestas vel, facilisis fermentum enim.
          Nam congue lobortis risus. Praesent vitae dignissim eros. Aenean
          sapien urna, egestas sagittis quam vitae, tempor volutpat eros.
        </p>
      </Alertbox>
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?!./Alertbox.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  );
