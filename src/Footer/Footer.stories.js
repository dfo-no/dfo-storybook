import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import Footer from './Footer';

storiesOf('Footer', module)
  .add(
    'Footer with links',
    () => (
      <Footer links={object('links', [
        { title: 'Link title', uri: '/' },
        { title: 'Link title', uri: '/' },
        { title: 'Link title', uri: '/' },
      ])}
      />
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?!./Footer.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  )
  .add('Footer without links',
    () => (
      <Footer />
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?!./Footer.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    });
