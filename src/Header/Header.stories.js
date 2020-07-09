import React from 'react';
import { storiesOf } from '@storybook/react';
import { object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Header from './Header';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Header.scss'),
  /* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('Header', module)
  .add(
    'Header',
    () => (
      <Header
        links={object('Links', [
          { link: 'url', title: 'Link title' },
          { link: 'url', title: 'Link title' },
          { link: 'url', title: 'Link title' },
        ])}
      />
    ),
    options,
  )
  .add(
    'Controlled header (see notes)',
    () => (
      <Header
        isOpen={boolean('isOpen', false)}
        onEvent={action('header-event')}
        links={object('Links', [
          { link: 'url', title: 'Link title' },
          { link: 'url', title: 'Link title' },
          { link: 'url', title: 'Link title' },
        ])}
      />
    ),
    {
      ...options,
      notes: `
      Sometimes it is desirable to make a component into a
      controlled component, which gives us full control of
      the header state.

      If the header component sees a 'isOpen' property it
      will skip using internal state for that and only wait
      for changes to its isOpen prop.

      Developers can then decide whether or not it should
      be open or closed by passing a callback function to
      the onEvent property and reacting to custom events.

      See also:
      https://reactjs.org/docs/forms.html#controlled-components
      `,
    },
  )
  .add(
    'Header with language options that redirect (see notes)',
    () => (
      <Header
        links={object('Links', [
          { link: 'url', title: 'Link title' },
          { link: 'url', title: 'Link title' },
          { link: 'url', title: 'Link title' },
        ])}
        languages={object('Languages', [
          { languageCode: 'no', title: 'Norsk', link: '/en' },
          { languageCode: 'en', title: 'English', link: '/no', isActive: true },
        ])}
      />
    ),
    {
      ...options,
      notes: `
        Some sites change language by url navigation.
      `,
    },
  )
  .add(
    'Header with language options as onClick',
    () => (
      <Header
        onEvent={action('header-event')}
        links={object('Links', [
          { link: 'url', title: 'Link title' },
          { link: 'url', title: 'Link title' },
          { link: 'url', title: 'Link title' },
        ])}
        languages={object('Languages', [
          { languageCode: 'no', title: 'Norsk', isActive: true },
          { languageCode: 'en', title: 'English' },
        ])}
      />
    ),
    {
      ...options,
      notes: `
        Some sites change language not by url redirect, but 'in-place' state changes.
      `,
    },
  );
