import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import { FloatingActionButton } from '.';

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./FloatingActionButton.scss'),
  /* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('FloatingActionButton', module)
  .add(
    'Basic',
    () => (
      <div>
        <FloatingActionButton onClick={action('clicked')}>{text('Text', 'Sign up for our newsletter')}</FloatingActionButton>
      </div>
    ),
    options,
  )
  .add(
    'Call to action',
    () => (
      <FloatingActionButton cta={boolean('cta', true)} onClick={action('clicked')}>
        {text('Text', 'Sign up for our newsletter')}
      </FloatingActionButton>
    ),
    options,
  )
  .add(
    'Inverted light version',
    () => (
      <FloatingActionButton invert={boolean('Invert', true)} onClick={action('clicked')}>
        {text('Text', 'Sign up for our newsletter')}
      </FloatingActionButton>
    ),
    options,
  )
  .add(
    'Danger button',
    () => (
      <FloatingActionButton danger={boolean('danger', true)} onClick={action('clicked')}>
        {text('Text', 'Delete all dem datas 😰')}
      </FloatingActionButton>
    ),
    options,
  )
  .add(
    'CTA link disguised as button',
    () => (
      <FloatingActionButton plainLink={boolean('Link', true)} cta={boolean('cta', true)} href="/somewhere">
        {text('Text', 'Sign up for our newsletter')}
      </FloatingActionButton>
    ),
    options,
  )
  .add(
    'Disabled',
    () => (
      <div>
        <FloatingActionButton onClick={action('clicked')} disabled>
          {text('Text', 'Sign up for our newsletter')}
        </FloatingActionButton>
      </div>
    ),
    options,
  );
