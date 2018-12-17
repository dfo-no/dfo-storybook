import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withCSS } from "../../.storybook/static-css-addon";
import { withKnobs, text, object } from "@storybook/addon-knobs";

import { Input, Checkbox, RadioButtons } from "..";

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
  )
  .add(
    "Radiobuttons field",
    () => (
      <RadioButtons
        name="isLeader"
        legend={text("Legend", "Er du i en lederstilling?")}
        options={object("Options", [
          { label: "Ja", value: "yes", defaultChecked: true },
          { label: "Nei", value: "no" }
        ])}
      />
    ),
    {
      css: require("!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../RadioButtons/RadioButtons.scss")
    }
  );
