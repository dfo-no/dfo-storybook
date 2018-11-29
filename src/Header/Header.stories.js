import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import Header from "./Header";

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Header", () => (
    <Header
      links={object("Links", [
        { link: <p>Her er noe tekst i en skuff</p> },
        { link: <p>Her er noe tekst i en skuff</p> },
        { link: <p>Her er noe tekst i en skuff</p> }
      ])}
    />
  ));
