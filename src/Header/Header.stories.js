import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withCSS } from "../../.storybook/static-css-addon";
import Header from "./Header";

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    "Header",
    () => (
      <Header
        links={object("Links", [
          { link: <p>Her er noe tekst i en skuff</p> },
          { link: <p>Her er noe tekst i en skuff</p> },
          { link: <p>Her er noe tekst i en skuff</p> }
        ])}
      />
    ),
    {
      css: require("!to-string-loader!css-loader!sass-loader!./Header.scss")
    }
  );
