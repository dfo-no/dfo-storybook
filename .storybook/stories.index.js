import React from "react";
import { withA11y } from '@storybook/addon-a11y';
// import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { Padding } from "./stories.decorators";
import { WelcomePage, TypographyPage, ColorsPage } from "./pages";
import { withCSS } from './static-css-addon';

export default {
  title: 'Welcome',
  decorators: [
    withA11y,
    Padding,  // Custom decorator for padding
    // ShowStaticMarkup, // Custom decorator to show static markup // TODO: StaticMarkup - Evaluate enabling after rewriting this functionality to fit better into Storybook 9.
    withKnobs, // Allows using knobs in stories
    withCSS, // Custom decorator for CSS
    withNotes // Allows adding notes to stories
  ],
  parameters: {
    options: {
      theme: {
        brandName: 'github repo',
        brandUrl: 'https://github.com/dfo-no/dfo-storybook'
      }
    },
  },
};

export const Index = () => <WelcomePage />;
export const Typography = () => <TypographyPage />; 
export const Colors = () => <ColorsPage />;
