import React from "react";
// import { withA11y } from '@storybook/addon-a11y';
// import { withNotes } from '@storybook/addon-notes'; // TODO: Fix this when the addon is updated to work with Storybook 9. https://www.npmjs.com/package/@storybook/addon-notes?activeTab=readme
import { Padding, ShowStaticMarkup } from "../.storybook/stories.decorators";
import { WelcomePage, TypographyPage, ColorsPage } from "../.storybook/pages";
import { withCSS } from '../.storybook/static-css-addon';

export default {
  title: 'Welcome',
  decorators: [
    // withA11y, // TODO: Needs to be migrated to a new way of doing things in Storybook 9
    Padding,  // Custom decorator for padding
    ShowStaticMarkup, // Custom decorator to show static markup
    withCSS, // Custom decorator for CSS
    // withNotes // Allows adding notes to stories // TODO: See above
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


// export const Index = () => {
//   return <div>Welcome to Storybook!</div>;
// };
export const Index = () => <WelcomePage />;
export const Typography = () => <TypographyPage />; 
export const Colors = () => <ColorsPage />;
