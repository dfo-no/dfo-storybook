import React from 'react';
import ExampleTableHtml from './Table.stories.data';
import { Table } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?!./Table.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

export default {
  title: 'Table',
  component: Table,
  parameters: [
    options,
  ],
};

export const WrappingNativeTable = () => (
  <Table
    name="wrapping-native-table">
    <ExampleTableHtml />
  </Table>
);

WrappingNativeTable.parameters = {
  notes: `
    This version shows how this component wraps a regular table and ensures that it is styled correctly.

    In dfo.no's Craft CMS, tables are stored as plain HTML.

    That's why this component is built to handle a plain HTML table.
  `,
};
