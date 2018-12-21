import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import { withCSS } from '../../.storybook/static-css-addon';
import { Alertbox } from '.';

storiesOf('Alertbox', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    'Alertbox',
    () => (
      <Alertbox>
        <p>This is an important announcement.</p>
        <p>It is perfectly fine to have more than one paragraph.</p>
      </Alertbox>
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Alertbox.scss'),
    },
  );
