import React from 'react';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    css: require('!to-string-loader!css-loader!sass-loader?!./Footer.scss'),
  },
  argTypes: {
    links: { control: 'object', description: 'Array of link objects with title and uri properties' },
  }
};

const Template = (args) => <Footer {...args} />;

export const FooterWithLinks = Template.bind({});

FooterWithLinks.args = {
  links: [
    { title: 'Link title', uri: '/' },
    { title: 'Link title', uri: '/' },
    { title: 'Link title', uri: '/' },
  ]
};

export const FooterWithoutLinks = Template.bind({});

FooterWithLinks.args = {};
