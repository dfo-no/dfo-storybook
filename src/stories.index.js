import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withNotes } from "@storybook/addon-notes";

import { Welcome } from "@storybook/react/demo";
import { Button, Input } from "./components";
import { TypographyPage, FormPage } from "./pages";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Typography", module).add("Overview", () => <TypographyPage />);

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Input field", () => (
    <Input label="Ditt brukernavn her:" value="brukernavn@dfo.no" />
  ))
  .addWithStaticMarkup("Complete form", () => <FormPage />);

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("with example text", () => (
    <Button invert={boolean("Invert", false)} onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ));
