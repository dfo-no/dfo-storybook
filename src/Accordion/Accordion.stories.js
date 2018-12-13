import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { action } from "@storybook/addon-actions";
import { ShowStaticMarkup } from "react-storybook-addon-static-markup";
import { withCSS } from "../../.storybook/static-css-addon";
import { Accordion } from ".";

storiesOf("Accordion", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    "Accordion",
    () => (
      <Accordion
        panels={object("Panels", [
          {
            heading: "Generelt om rollestrukturen",
            id: "1",
            content: <p>Her er noe tekst i en skuff</p>
          },
          {
            heading: "Funksjonsroller",
            id: "2",
            content: (
              <p>
                Noe <strong>sterkt</strong> innhold
              </p>
            )
          },
          {
            heading: "Basisroller",
            id: "3",
            content: <p>Her kommer noe om utredningsinstruksen</p>
          }
        ])}
        onPanelClicked={action("onPanelClicked")}
      />
    ),
    {
      css: [
        require("!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Accordion.scss"),
        require("!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./AccordionArrow.scss")
      ]
    }
  );
