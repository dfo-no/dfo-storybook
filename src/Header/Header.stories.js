import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import Header from './Header';

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
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Header.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  );
