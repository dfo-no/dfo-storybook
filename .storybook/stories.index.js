import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { withOptions } from '@storybook/addon-options';


import { Padding, ShowStaticMarkup } from "./stories.decorators";
import { WelcomePage, TypographyPage, ColorsPage } from "./pages";

addDecorator(
  withOptions({
    name: 'github repo',
    url: 'https://github.com/netliferesearch/dfo-storybook'
  })
);
addDecorator(Padding);
addDecorator(ShowStaticMarkup);

storiesOf("Welcome", module)
  .add('Index', () => <WelcomePage/>)
  .add("Typography", () => <TypographyPage />)
  .add("Colors: dfo.no", () => <ColorsPage />);
