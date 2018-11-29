import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";

import { Accordion } from ".";

storiesOf("Accordion", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Accordion", () => (
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
  ));
