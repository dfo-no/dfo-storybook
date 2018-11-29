import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { Button } from ".";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Basic", () => (
    <Button onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ))
  .addWithStaticMarkup("Call to action", () => (
    <Button cta={boolean("cta", true)} onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ))
  .addWithStaticMarkup("Inverted light version", () => (
    <Button invert={boolean("Invert", true)} onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ))
  .addWithStaticMarkup("CTA link disguised as button", () => (
    <Button
      plainLink={boolean("Link", true)}
      cta={boolean("cta", true)}
      invert={boolean("invert", false)}
      href="/somewhere"
    >
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ));
