import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';

import { withCSS } from '../../.storybook/static-css-addon';
import ExampleTableHtml from './Table.stories.data';
import { Table } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Table.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('Table', module)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .addDecorator(withNotes)
  .add(
    'Wrapping native table',
    () => (
      <Table>
        <ExampleTableHtml />
      </Table>
    ),
    {
      ...options,
      notes: `
      This version show how this component wraps a regular table and ensures that it is styled correctly.

      In dfo.no's Craft CMS tables are stored as plain html.

      That's why this component is built to handle a plain html table.
      `,
    },
  );
