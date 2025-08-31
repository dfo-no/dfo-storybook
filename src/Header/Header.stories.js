import React from 'react';
import { action } from 'storybook/actions';
import Header from './Header';

const headerStyles = require('!to-string-loader!css-loader!sass-loader?!./Header.scss');

export default {
  title: 'Header',
  component: Header,
  parameters: {
    css: headerStyles,
  },
  argTypes: {
    links: { control: 'object' },
    languages: { control: 'object' },
    isOpen: { control: 'boolean' },
    onEvent: { action: 'header-event' },
  },
};

const defaultLinks = [
  { link: 'url', title: 'Link title' },
  { link: 'url', title: 'Link title' },
  { link: 'url', title: 'Link title' },
];

const defaultLanguagesRedirect = [
  { languageCode: 'no', title: 'Norsk', link: '/en' },
  { languageCode: 'en', title: 'English', link: '/no', isActive: true },
];

const defaultLanguagesOnClick = [
  { languageCode: 'no', title: 'Norsk', isActive: true },
  { languageCode: 'en', title: 'English' },
];

const Template = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  links: defaultLinks,
};

export const ControlledHeader = Template.bind({});
ControlledHeader.args = {
  isOpen: false,
  links: defaultLinks,
  onEvent: action('header-event'),
};
ControlledHeader.parameters = {
  notes: `
    Sometimes it is desirable to make a component into a
    controlled component, which gives us full control of
    the header state.

    If the header component sees a 'isOpen' property it
    will skip using internal state for that and only wait
    for changes to its isOpen prop.

    Developers can then decide whether or not it should
    open or closed by passing a callback function to
    the onEvent property and reacting to custom events.

    See also:
://reactjs.org/docs/forms.html#controlled-components
  `,
};

export const HeaderWithLanguageRedirect = Template.bind({});
HeaderWithLanguageRedirect.args = {
  links: defaultLinks,
  languages: defaultLanguagesRedirect,
};
HeaderWithLanguageRedirect.parameters = {
  notes: `
    Some sites change language by url navigation.
  `,
};

export const HeaderWithLanguageOnClick = Template.bind({});
HeaderWithLanguageOnClick.args = {
  links: defaultLinks,
  languages: defaultLanguagesOnClick,
 Event: action('header-event'),
};
HeaderWithLanguageOnClick.parameters = {
  notes: `
    Some sites change language not by url redirect, but 'in-place' state changes.
  `,
};
