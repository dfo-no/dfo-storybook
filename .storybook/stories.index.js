import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";

import { Padding, ShowStaticMarkup } from "./stories.decorators";
import { WelcomePage, TypographyPage, ColorsPage } from "./pages";

addDecorator(Padding);
addDecorator(ShowStaticMarkup);

storiesOf("Welcome", module)
  .add('Index', () => <WelcomePage/>);

storiesOf('Visual basis')
  .add("Typography", () => <TypographyPage />)
  .add("Colors: dfo.no", () => <ColorsPage />)
