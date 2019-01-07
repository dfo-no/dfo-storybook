import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, object } from '@storybook/addon-knobs';

import { withCSS } from '../../.storybook/static-css-addon';
import { RadioButtons } from '..';

storiesOf('Radio buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .addDecorator(withNotes)
  .add(
    'simple',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <RadioButtons
          name="isLeader"
          options={object('Options', [
            { label: 'Ja', value: 'yes', defaultChecked: true },
            { label: 'Nei', value: 'no' },
          ])}
        />
      </div>
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../RadioButtons/RadioButtons.scss'),
    },
  )
  .add(
    'with legend',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <RadioButtons
          name="isLeader"
          legend="Er du i en lederstilling?"
          options={[
            { label: 'Ja', value: 'yes', defaultChecked: true },
            { label: 'Nei', value: 'no' },
          ]}
        />
      </div>
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../RadioButtons/RadioButtons.scss'),
    },
  );
