import React from 'react';
import { RadioButtons, Fieldset } from '..';
import { Form } from '../Form';

export default {
  title: 'RadioButtons',
  component: RadioButtons,
  parameters: {
    css: require('!to-string-loader!css-loader!sass-loader?!../RadioButtons/RadioButtons.scss'),
  },
};

export const WithLegend = () => (
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
);
