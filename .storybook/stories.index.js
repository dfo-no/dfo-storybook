import React from "react";
import { storiesOf, addDecorator, addParameters } from "@storybook/react";
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { Padding, ShowStaticMarkup } from "./stories.decorators";
import { WelcomePage, TypographyPage, ColorsPage } from "./pages";
import { withCSS } from './static-css-addon';

addDecorator(withA11y);
addDecorator(Padding);
addDecorator(ShowStaticMarkup);
addDecorator(withKnobs)
addDecorator(withCSS)
addDecorator(withNotes)
addParameters({options: {
  theme: {
    brandName : 'github repo',
    brandUrl : 'https://github.com/netliferesearch/dfo-storybook'
  }
}})

storiesOf("Welcome", module)
  .add('Index', () => <WelcomePage/>)
  .add("Typography", () => <TypographyPage />)
  .add("Colors: dfo.no", () => <ColorsPage />);
