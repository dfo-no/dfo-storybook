import { type Decorator } from '@storybook/react-vite';


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
