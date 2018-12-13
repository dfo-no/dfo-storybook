import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withCSS } from "../../.storybook/static-css-addon";

import { Input, Checkbox } from "..";

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    "Text field",
    () => <Input label="Ditt brukernavn her:" value="brukernavn@dfo.no" />,
    {
      css: require("!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss")
    }
  )
  .add(
    "Checkbox field",
    () => (
      <Checkbox
        label="Nyhetsbrev om virksomhets- og økonomistyring"
        name="fields[customerNoteInterests][]"
      />
    ),
    {
      css: require("!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Checkbox/Checkbox.scss")
    }
  );
