import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text } from '@storybook/addon-knobs';

import { withCSS } from '../../.storybook/static-css-addon';
import { Input } from '..';

storiesOf('Text field', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .addDecorator(withNotes)
  .add(
    'normal state',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <Input
          label={text('label', 'Fornavn:')}
          name={text('name', 'firstName')}
          type="text"
        />
      </div>
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss'),
    },
  )
  .add(
    'with error',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <Input
          label={text('label', 'Fornavn:')}
          name={text('name', 'firstName')}
          error={text('error', 'Vennligst fyll ut fornavn')}
          type="text"
        />
      </div>
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss'),
      notes: `
      Error
      `,
    },
  );
