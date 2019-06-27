import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text, boolean, object,
} from '@storybook/addon-knobs';

import { DarkBackground } from '../../.storybook/stories.decorators';
import { LinkList } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./LinkList.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('List', module)
  .add(
    'Link list',
    () => (
      <LinkList
        title={text('Title', 'Regnskap og økonomistyring')}
        invert={boolean('Invert', false)}
        links={object('Links', [
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
            link: '/test',
            target: '_blank',
          },
        ])}
      />
    ),
    options,
  )
  .add(
    'Link list: Inverted',
    () => (
      <LinkList
        title={text('Title', 'Regnskap og økonomistyring')}
        invert={boolean('Invert', true)}
        links={object('Links', [
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
            link: '/test',
            target: '_blank',
          },
        ])}
      />
    ),
    {
      ...options,
      decorators: [DarkBackground],
    },
  );
