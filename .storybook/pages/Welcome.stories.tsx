// .storybook/pages/Welcome.stories.tsx
import { WelcomePage, TypographyPage, ColorsPage } from '.';
import { version as storybookVersion } from '@storybook/react/package.json';

export default {
  title: 'Welcome',
};

export const Index = () => <WelcomePage storybookVersion={storybookVersion}/>;
export const Typography = () => <TypographyPage />;
export const Colors = () => <ColorsPage />;

// Use the `storyName` property to customize the label
Colors.storyName = 'Colors: dfo.no';
