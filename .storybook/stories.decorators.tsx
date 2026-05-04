import { type Decorator } from '@storybook/react';
// import { ShowStaticMarkup as SSM } from "react-storybook-addon-static-markup";


// Type for Story Decorators
type StoryDecorator = Decorator;

export const DarkBackground: StoryDecorator = (Story) => (
  <div style={{ backgroundColor: "#012a4c" }}>
    <Story />
  </div>
);

export const Padding: StoryDecorator = (Story) => (
  <div style={{ padding: "24px" }}>
    <Story />
  </div>
);

// ShowStaticMarkup Decorator (deprecated, consider alternatives)
export const ShowStaticMarkup: StoryDecorator = (Story) => {
  // If you still use react-storybook-addon-static-markup:
  // import { ShowStaticMarkup as SSM } from "react-storybook-addon-static-markup";
  // return <SSM><Story /></SSM>;

  // Modern alternative: Use Storybook Docs or MDX for static content.
  return <Story />;
};
