import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { Button } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Button.scss'),
/* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('Button', module)
  .add(
    'Basic',
    () => (
      <div>
        <Button onClick={action('clicked')}>
          {text('Text', 'Sign up for our newsletter')}
        </Button>
      </div>
    ),
    options,
  )
  .add(
    'Call to action',
    () => (
      <Button
        cta={boolean('cta', true)}
        onClick={action('clicked')}
      >
        {text('Text', 'Sign up for our newsletter')}
      </Button>
    ),
    options,
  )
  .add(
    'Inverted light version',
    () => (
      <Button
        invert={boolean('Invert', true)}
        onClick={action('clicked')}
      >
        {text('Text', 'Sign up for our newsletter')}
      </Button>
    ),
    options,
  )
  .add(
    'Danger button',
    () => (
      <Button
        danger={boolean('danger', true)}
        onClick={action('clicked')}
      >
        {text('Text', 'Delete all dem datas 😰')}
      </Button>
    ),
    options,
  )
  .add(
    'CTA link disguised as button',
    () => (
      <Button
        plainLink={boolean('Link', true)}
        cta={boolean('cta', true)}
        href="/somewhere"
      >
        {text('Text', 'Sign up for our newsletter')}
      </Button>
    ),
    options,
  );
