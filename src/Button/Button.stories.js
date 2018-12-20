import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';

import { withCSS } from '../../.storybook/static-css-addon';
import { Button } from '.';

const options = {
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Button.scss'),
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .add(
    'Basic',
    () => (
      <Button onClick={action('clicked')}>
        {text('Text', 'Meld deg på nyhetsbrev')}
      </Button>
    ),
    options,
  )
  .add(
    'Call to action',
    () => (
      <Button cta={boolean('cta', true)} onClick={action('clicked')}>
        {text('Text', 'Meld deg på nyhetsbrev')}
      </Button>
    ),
    options,
  )
  .add(
    'Inverted light version',
    () => (
      <Button invert={boolean('Invert', true)} onClick={action('clicked')}>
        {text('Text', 'Meld deg på nyhetsbrev')}
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
        invert={boolean('invert', false)}
        href="/somewhere"
      >
        {text('Text', 'Meld deg på nyhetsbrev')}
      </Button>
    ),
    options,
  );
