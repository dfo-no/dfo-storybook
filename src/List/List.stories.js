import React from 'react';
import { DarkBackground } from '../../.storybook/stories.decorators';
import { LinkList } from '.';

const linkListStyles = require('!to-string-loader!css-loader!sass-loader?!./LinkList.scss');

export default {
  title: 'List',
  component: LinkList,
  parameters: {
    css: linkListStyles,
  },
  argTypes: {
    title: { control: 'text', description: 'Title of the link list' },
    invert: { control: 'boolean', description: 'Invert the colors of the link list' },
    links: {
      control: 'object',
      description: 'Array of link objects with text, link, externalLink, downloadLink, and target properties',
    },
  },
};

const defaultLinks = [
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
    link: '/test',
    target: '_blank',
  },
];

const Template = (args) => <LinkList {...args} />;

export const LinkListDefault = Template.bind({});

LinkListDefault.args = {
    title: 'Regnskap og økonomistyring',
    invert: false,
    links: defaultLinks
};

export const LinkListInverted = Template.bind({});

LinkListInverted.args = {
    title: 'Regnskap og økonomistyring',
    invert: true,
    links: defaultLinks
};

LinkListInverted.decorators = [DarkBackground];
