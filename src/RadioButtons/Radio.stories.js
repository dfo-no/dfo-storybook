import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';

import { withCSS } from '../../.storybook/static-css-addon';
import { RadioButtons, Fieldset } from '..';
import { Form } from '../Form';

storiesOf('Radio buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .addDecorator(withNotes)
  .add(
    'with legend',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <Form>
          <Fieldset legend="Er du i en lederstilling?">
            <RadioButtons
              name="isLeader"
              options={[
                { label: 'Ja', value: 'yes', defaultChecked: true },
                { label: 'Nei', value: 'no' },
              ]}
            />
          </Fieldset>
        </Form>
      </div>
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../RadioButtons/RadioButtons.scss'),
    },
  );
