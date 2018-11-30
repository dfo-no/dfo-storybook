import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { ShowStaticMarkup } from "react-storybook-addon-static-markup";
import { withCSS } from "../../.storybook/static-css-addon";
import css from "./Accordion.scss";

import { Accordion } from ".";

storiesOf("Accordion", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    "Accordion",
    () => (
      <ShowStaticMarkup>
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
        />
      </ShowStaticMarkup>
    ),
    { css: "Static CSS to be added" }
  );
