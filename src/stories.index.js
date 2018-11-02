import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withNotes } from "@storybook/addon-notes";

import { Welcome } from "@storybook/react/demo";
import { Button } from "./components";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("with example text", () => (
    <Button invert={boolean("Invert", false)} onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ));
