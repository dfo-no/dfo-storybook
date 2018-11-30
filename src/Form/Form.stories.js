import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";

import { Input, Checkbox } from "..";

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add("Text field", () => (
    <Input label="Ditt brukernavn her:" value="brukernavn@dfo.no" />
  ))
  .add("Checkbox field", () => (
    <Checkbox
      label="Nyhetsbrev om virksomhets- og økonomistyring"
      name="fields[customerNoteInterests][]"
    />
  ));
