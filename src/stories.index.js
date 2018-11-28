import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, object } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";
import { withNotes } from "@storybook/addon-notes";

import { Welcome } from "@storybook/react/demo";
import {
  Button,
  Input,
  Checkbox,
  LinkList,
  Factbox,
  Alertbox
} from "./components";
import { DarkBackground } from "./stories.decorators";
import { TypographyPage, FormPage, ColorsPage } from "./pages";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Typography", module).add("Overview", () => <TypographyPage />);

//storiesOf("Tables", module)
//  .addDecorator(withKnobs)
//  .add("Table", () => (
//    <TablePage
//      caption={text(
//        "Caption",
//        "<p>Imperial to metric conversion factors<br/><em>Values are given to three significant figures unless exact</em></p>"
//      )}
//      zebra={boolean("Zebra stripes", false)}
//      borders={boolean("Borders", false)}
//    />
//  ));

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

storiesOf("Factbox", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Factbox", () => (
    <Factbox>
      <h2>Nøkkeltall</h2>
      <ul>
        <li>420 ansatte (2017)</li>
        <li>
          84 prosent av alle statlige virksomheter bruker våre lønn- og
          regnskapstjenester (2016)
        </li>
        <li>195 047 lønns- og trekkoppgaver (2016)</li>
        <li>530 milliarder kroner utbetalt via økonomisystemet (2016)</li>
        <li>907 070 behandlede fakturaer (2016)</li>
        <li>
          65&nbsp;millioner transaksjoner gjennom
          statens&nbsp;konsernkontoordning (2015)
        </li>
        <li>
          227 statlige virksomheter innrapporterer til statsregnskapet (2015)
        </li>
      </ul>
    </Factbox>
  ));

storiesOf("Alertbox", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addWithStaticMarkup("Alertbox", () => (
    <Alertbox>
      <p>Dette er en viktig melding.</p>
      <p>Og den kan gjerne foregå over flere linjer.</p>
      <p>Med en linje til.</p>
    </Alertbox>
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
  ))
  .addWithStaticMarkup("CTA link disguised as button", () => (
    <Button
      plainLink={boolean("Link", true)}
      cta={boolean("cta", true)}
      invert={boolean("invert", false)}
      href="/somewhere"
    >
      {text("Text", "Meld deg på nyhetsbrev")}
    </Button>
  ));
