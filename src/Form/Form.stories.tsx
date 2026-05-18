import type { Meta, StoryObj } from '@storybook/react'
import { withCSS } from '../../.storybook/static-css-addon/index';
import SCSS from './Form.scss?raw'; // Vite-specific syntax
import { fn } from 'storybook/test'; 
import {
  Form,
  Fieldset,
  Input,
  Button,
  RadioButtons,
  Checkbox,
  Select,
  Expand,
} from '../index';
import { useState, type FormEvent } from 'react';
// import type { EventData } from 'node:test';


const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  decorators: [withCSS],
  args: {
    onSubmit: fn(), // (e) => { e.preventDefault(); fn(); console.log('Submitted!'); },
  },
  argTypes: {
    onSubmit: {
      description: 'Form submission handler',
      action: 'submitted', // This will log the event in the Actions tab
    },
  },
  parameters: {
    css: [SCSS],
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

// Stories
export const TheBuildingBlocks: Story = {
  render: () => (
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
  ),
};

export const SimpleForm: Story = {
  render: (args) => {
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      console.log('Submitted!');
      e.preventDefault();
      if(args.onSubmit) {
        args.onSubmit(e);
      }
    };

    return(
      <div style={{ maxWidth: '705px' }}>
        <Form method="post" onSubmit={handleSubmit}>
          <Fieldset>
            <Input
              label="E-mail"
              type="text"
              name="fields[email]"
              defaultValue=""
            />
          </Fieldset>
          <Fieldset resetBackground>
            <Button type="submit">Meld på</Button>
          </Fieldset>
        </Form>
      </div>
    );
  },
};

export const CompleteForm: Story = {
  render: (args) => {

    const [selectValue, setSelectValue] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      console.log('Submitted!');
      e.preventDefault();
      if(args.onSubmit) {
        args.onSubmit(e);
      }
    };
    
    return (
      <div style={{ maxWidth: '705px' }}>
        <Form method="post" onSubmit={handleSubmit}>
          <h2>DFØs Styringskonferanse 2019</h2>
          <Fieldset legend="Kontaktinformation:">
            <Input 
              label="Fornavn" 
              type="text" 
              name="fields[firstName]" 
              defaultValue="" 
            />
            <Input
              label="Etternavn"
              type="text"
              error="Vennligst fyll ut etternavn"
              name="fields[lastName]"
              defaultValue=""
            />
          </Fieldset>
          <Fieldset legend="Er du i en lederstilling?">
            <RadioButtons
              name="isLeader"
              options={[
                { label: 'Ja', value: 'yes', defaultChecked: true },
                { label: 'Nei', value: 'no' },
              ]}
            />
            <Expand title="Usikker?">
              Dersom du ikke vet om du er leder, er du det nok ikke..
            </Expand>
          </Fieldset>
          <Fieldset legend="Hvilke deler av konferansen du skal delta på?">
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
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            />
          </Fieldset>
          <Fieldset resetBackground>
            <Button type="submit">Meld på</Button>
          </Fieldset>
        </Form>
      </div>
    );
  },
};
