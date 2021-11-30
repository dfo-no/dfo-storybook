import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Input } from '..';

storiesOf('Text field', module)
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
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  )
  .add(
    'marked required',
    () => (
      <div style={{ maxWidth: '750px' }}>
        <Input
          label={text('label', 'Fornavn:')}
          name={text('name', 'firstName')}
          type="text"
          asterisk="true"
          required
        />
      </div>
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
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
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
      notes: `
      Error
      `,
    },
  )
  .add(
    'disabled',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <Input
          label={text('label', 'Fornavn:')}
          name={text('name', 'firstName')}
          type="text"
          disabled
        />
      </div>
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  );
