import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withCSS } from "../../.storybook/static-css-addon";
import Footer from "./Footer";

storiesOf("Footer", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    "Footer with links",
    () => (
      <Footer links={object("links", [
        {title: "Link title", uri: "/"},
        {title: "Link title", uri: "/"},
        {title: "Link title", uri: "/"}
      ])}/>
    ),
    {
      css: require("!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Footer.scss")
    }
  )
    .add("Footer without links",
    () => (
      <Footer/>
    ),
    {
      css: require("!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Footer.scss")
    }
  );
