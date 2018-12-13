import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withCSS } from "../../.storybook/static-css-addon";
import { withNotes } from "@storybook/addon-notes";
import { Table } from ".";
import { ExampleTableHtml } from "./Table.stories.data";

const options = {
  css: require("!to-string-loader!css-loader!sass-loader!./Table.scss")
};

storiesOf("Table", module)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .addDecorator(withNotes)
  .add(
    "Wrapping native table",
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
      `
    }
  );
