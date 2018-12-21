import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Form,
  Input,
  Button,
  RadioButtons,
  Checkbox,
  Select,
} from '../index';

storiesOf('Forms', module)
  .add('Complete form', () => (
    <div style={{ maxWidth: '705px' }}>
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
          <h3>Hvilke deler av konferansen du skal delta på? </h3>
          <Checkbox
            name="ledercheck"
            label="Del 1"
            description="
              Her er det litt plass til tekst om noe om etteller annet eller litt
              til. Her er det litt plass til tekst om noe om etteller annet eller litt til.
            "
          />
          <Checkbox
            name="ledercheck"
            label="Del 2"
          />
        </fieldset>
        <fieldset className="dfo-form__fieldset">
          <Select
            name="dropdown"
            label="Dette er en dropdown"
            options={['Val 1', 'Val 2']}
          />
        </fieldset>
        <fieldset className="dfo-form__fieldset dfo-form__fieldset--reset-background">
          <Button type="submit">Meld på</Button>
        </fieldset>
      </Form>
    </div>
  ));
