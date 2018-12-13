import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withCSS } from "../../.storybook/static-css-addon";
import { Table } from ".";
import { ExampleTableHtml } from "./Table.stories.data";

const options = {
  css: require("!to-string-loader!css-loader!sass-loader!./Table.scss")
};

storiesOf("Table", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    "Wrap native table elements",
    () => (
      <Table>
        <ExampleTableHtml />
      </Table>
    ),
    options
  );
