import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Form,
  Fieldset,
  Input,
  Button,
  RadioButtons,
  Checkbox,
  Select,
} from '../index';

storiesOf('Forms', module)
  .add('the building blocks', () => (
    <div>
      <h2>The &lt;Form&gt; component</h2>
      <p>
        The form component comes with styles for fieldsets and the form
        wrapper, and should be used when wrapping a form. The form can
        contain an &lt;h2&gt; if you want a heading for your form.
      </p>
      <h2>The &lt;Fieldset&gt; component</h2>
      <p>You <strong>must</strong> have at least one fieldset inside your form for everything to work.</p>
      <p>
        The fieldset is a way of sectioning up a form, so if you have a form
        that can be divided into smaller, logical parts, this is a good
        way of doing it.
      </p>
      <p>
        Add a fieldset without props for a regular fieldset. If you want a
        fieldset with no background (typically for submit button at the end), add
        the <code>resetBackground</code> prop.
      </p>
    </div>
  ))
  .add('simple form', () => (
    <div style={{ maxWidth: '705px' }}>
      <Form method="post">
        <Fieldset>
          <Input
            label="E-mail"
            type="text"
            name="fields[email]"
            value=""
          />
        </Fieldset>
        <Fieldset resetBackground>
          <Button type="submit">Meld på</Button>
        </Fieldset>
      </Form>
    </div>
  ))
  .add('Complete form', () => (
    <div style={{ maxWidth: '705px' }}>
      <Form method="post">
        <h2>DFØs Styringskonferanse 2019</h2>
        <Fieldset>
          <legend>Kontaktinformation:</legend>
          <Input label="Fornavn" type="text" name="fields[firstName]" value="" />
          <Input
            label="Etternavn"
            type="text"
            error="Vennligst fyll ut etternavn"
            name="fields[lastName]"
            value=""
          />
        </Fieldset>
        <Fieldset>
          <RadioButtons
            name="isLeader"
            legend="Er du i en lederstilling?"
            options={[
              { label: 'Ja', value: 'yes', defaultChecked: true },
              { label: 'Nei', value: 'no' },
            ]}
          />
        </Fieldset>
        <Fieldset>
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
        </Fieldset>
        <Fieldset>
          <Select
            name="dropdown"
            label="Dette er en dropdown"
            options={['Val 1', 'Val 2']}
          />
        </Fieldset>
        <Fieldset resetBackground>
          <Button type="submit">Meld på</Button>
        </Fieldset>
      </Form>
    </div>
  ));
