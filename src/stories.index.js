import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withNotes } from "@storybook/addon-notes";

import { Welcome } from "@storybook/react/demo";
import { Button, Input, Checkbox, LinkList } from "./components";
import { TypographyPage, FormPage, ColorsPage } from "./pages";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Typography", module).add("Overview", () => <TypographyPage />);

storiesOf("Colors", module).add("Colors: dfo.no", () => <ColorsPage />);

storiesOf("Forms", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Text field", () => (
    <Input label="Ditt brukernavn her:" value="brukernavn@dfo.no" />
  ))
  .addWithStaticMarkup("Checkbox field", () => (
    <Checkbox
      label="Nyhetsbrev om virksomhets- og økonomistyring"
      name="fields[customerNoteInterests][]"
    />
  ))
  .addWithStaticMarkup("Complete form", () => <FormPage />);

storiesOf("Lists", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Link list", () => (
    <LinkList
      title={text("Title", "Regnskap og økonomistyring")}
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

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("with example text", () => (
    <Button invert={boolean("Invert", false)} onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ));
