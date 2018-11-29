import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";

import { Input, Checkbox } from "..";

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Text field", () => (
    <Input label="Ditt brukernavn her:" value="brukernavn@dfo.no" />
  ))
  .addWithStaticMarkup("Checkbox field", () => (
    <Checkbox
      label="Nyhetsbrev om virksomhets- og økonomistyring"
      name="fields[customerNoteInterests][]"
    />
  ))
