import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';

import { withCSS } from '../../.storybook/static-css-addon';
import { Select } from '..';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .addDecorator(withNotes)
  .add(
    'simple',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <Select
          name="dropdown"
          label="Dette er en dropdown"
          options={['Val 1', 'Val 2']}
        />
      </div>
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Select/Select.scss'),
    },
  );
