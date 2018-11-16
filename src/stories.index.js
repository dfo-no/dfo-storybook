import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withNotes } from "@storybook/addon-notes";

import { Welcome } from "@storybook/react/demo";
import { Button, Input, Checkbox, LinkList } from "./components";
import { DarkBackground } from "./stories.decorators";
import { TypographyPage, FormPage, ColorsPage, TablePage } from "./pages";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Typography", module).add("Overview", () => <TypographyPage />);

storiesOf("Tables", module).add("Default", () => <TablePage />);

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

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Basic", () => (
    <Button onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ))
  .addWithStaticMarkup("Call to action", () => (
    <Button cta={boolean("cta", true)} onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ))
  .addWithStaticMarkup("Inverted light version", () => (
    <Button invert={boolean("Invert", true)} onClick={action("clicked")}>
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ));
