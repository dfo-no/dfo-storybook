import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";

import { LinkList } from ".";
import { DarkBackground } from "../../.storybook/stories.decorators";

storiesOf("List", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Link list", () => (
    <LinkList
      title={text("Title", "Regnskap og økonomistyring")}
      invert={boolean("Invert", false)}
      links={object("Links", [
        {
          text: "Utredningsinstruksen",
          link: "/fagomrader/utredningsinstruksen"
        },
        { text: "Økonomiregelverket", link: "/fagomrader/økonomiregelverket" },
        {
          text: "Statens personalhåndbok",
          externalLink: "https://lovdata.no/dokument/SPH/sph-2018"
        },
        {
          text: "Reiseregning (for reiser etter 22. juni 2018) bokmål (Excel)",
          downloadLink: "/fagomrader/lastNed"
        }
      ])}
    />
  ))
  .addDecorator(DarkBackground)
  .addWithStaticMarkup("Link list: Inverted", () => (
    <LinkList
      title={text("Title", "Regnskap og økonomistyring")}
      invert={boolean("Invert", true)}
      links={object("Links", [
        {
          text: "Utredningsinstruksen",
          link: "/fagomrader/utredningsinstruksen"
        },
        { text: "Økonomiregelverket", link: "/fagomrader/økonomiregelverket" },
        {
          text: "Statens personalhåndbok",
          externalLink: "https://lovdata.no/dokument/SPH/sph-2018"
        },
        {
          text: "Reiseregning (for reiser etter 22. juni 2018) bokmål (Excel)",
          downloadLink: "/fagomrader/lastNed"
        }
      ])}
    />
  ));
