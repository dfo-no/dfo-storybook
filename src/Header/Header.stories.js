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
          { link: "url", title: "Link title" },
          { link: "url", title: "Link title" },
          { link: "url", title: "Link title" }
        ])}
      />
    ),
    {
      css: require("!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Header.scss")
    }
  );
