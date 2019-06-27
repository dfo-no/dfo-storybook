import React from 'react';
import { storiesOf } from '@storybook/react';

import { RadioButtons, Fieldset } from '..';
import { Form } from '../Form';

storiesOf('Radio buttons', module)
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
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../RadioButtons/RadioButtons.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  );
