import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withCSS } from "../../.storybook/static-css-addon";
import Burger from "./Burger";

storiesOf("Burger", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    "Menu open",
    () => (
      <Burger
      open={true}
      />
      ),
      {
        css: require("!to-string-loader!css-loader!sass-loader!./Burger.scss")
      }
    )
    .add(
      "Menu closed",
      () => (
        <Burger
        open={false}
        />
      ),
      {
        css: require("!to-string-loader!css-loader!sass-loader!./Burger.scss")
      }
    );
