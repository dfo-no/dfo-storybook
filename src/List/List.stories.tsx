import type { Meta, StoryObj } from '@storybook/react-vite';
import { withCSS } from '../../.storybook/static-css-addon';
import { DarkBackground } from '../../.storybook/stories.decorators';
import LinkList from './LinkList';
import SCSS from './LinkList.scss?raw'; // Vite-specific syntax


const meta: Meta<typeof LinkList> = {
  title: 'Components/List',
  component: LinkList,
  decorators: [withCSS],
  args: {},
  argTypes: {
    title: { control: 'text' },
    invert: { control: 'boolean' },
    links: {
      control: 'object',
      description: 'Array of link objects (internal, external, or download)',
    },
  },
  parameters: {
    css: SCSS,
    docs: {
      description: {
        component: 'A component for rendering lists of links with support for internal, external, and download links.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkList>;

// Stories
export const Normal: Story = {
  args: {
    title: 'Regnskap og økonomistyring',
    links: [
      {
        text: 'Utredningsinstruksen',
        link: '/fagomrader/utredningsinstruksen',
      },
      {
        text: 'Økonomiregelverket',
        link: '/fagomrader/økonomiregelverket',
      },
      {
        text: 'Statens personalhåndbok',
        externalLink: 'https://lovdata.no/dokument/SPH/sph-2018',
      },
      {
        text:
          'Reiseregning (for reiser etter 22. juni 2018) bokmål (Excel)',
        downloadLink: '/fagomrader/lastNed',
      },
      {
        text: 'Åpne i nytt vindu/fane',
        externalLink: 'https://lovdata.no/dokument/SPH/sph-2018/',
        target: '_blank',
      },
    ],    
  },
};

export const Inverted: Story = {
  args: {
    title: 'Regnskap og økonomistyring',
    invert: true,
    links: [
      {
        text: 'Utredningsinstruksen',
        link: '/fagomrader/utredningsinstruksen',
      },
      {
        text: 'Økonomiregelverket',
        link: '/fagomrader/økonomiregelverket',
      },
      {
        text: 'Statens personalhåndbok',
        externalLink: 'https://lovdata.no/dokument/SPH/sph-2018',
      },
      {
        text: 'Reiseregning (for reiser etter 22. juni 2018) bokmål (Excel)',
        downloadLink: '/fagomrader/lastNed',
      },
      {
        text: 'Åpne i nytt vindu/fane',
        externalLink: 'https://lovdata.no/dokument/SPH/sph-2018/',
        target: '_blank',
      },
    ],
  },
  decorators: [DarkBackground],
};
