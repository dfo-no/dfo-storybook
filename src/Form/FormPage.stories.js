import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Form,
  Input,
  Button,
  RadioButtons,
  Checkbox
} from '../index';

storiesOf('Forms', module)
  .add('Complete form', () => (
    <div style={{maxWidth: '705px'}}>
      <Form method="post">
        <h2>DFØs Styringskonferanse 2019</h2>
        <fieldset className="dfo-form__fieldset">
          <legend>Kontaktinformation:</legend>
          <Input label="Fornavn" type="text" name="fields[firstName]" value="" />
          <Input
            label="Etternavn"
            type="text"
            error="Vennligst fyll ut etternavn"
            name="fields[lastName]"
            value=""
          />
        </fieldset>
        <fieldset className="dfo-form__fieldset">
          <RadioButtons
            name="isLeader"
            legend="Er du i en lederstilling?"
            options={[
              { label: 'Ja', value: 'yes', defaultChecked: true },
              { label: 'Nei', value: 'no' },
            ]}
          />
        </fieldset>
        <fieldset className="dfo-form__fieldset">
          <Checkbox
            name="ledercheck"
            label="Er du i en lederstilling?"
          />
        </fieldset>
        <fieldset className="dfo-form__fieldset dfo-form__fieldset--reset-background">
          <Button type="submit">Meld på</Button>
        </fieldset>
      </Form>
    </div>
  ));
