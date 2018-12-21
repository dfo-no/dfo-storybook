import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import { withCSS } from '../../.storybook/static-css-addon';
import {
  Input, Checkbox, RadioButtons, Select,
} from '..';

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .addDecorator(withNotes)
  .add(
    'Text field',
    () => (
      <Input
        label={text('label', 'Fornavn:')}
        name={text('name', 'firstName')}
        type="text"
      />
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss'),
    },
  )
  .add(
    'Text field (error)',
    () => (
      <Input
        label={text('label', 'Fornavn:')}
        name={text('name', 'firstName')}
        error={text('error', 'Vennligst fyll ut fornavn')}
        type="text"
      />
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Input/Input.scss'),
      notes: `
      Error
      `,
    },
  )
  .add(
    'Checkbox field',
    () => (
      <Checkbox
        label="Nyhetsbrev om virksomhets- og økonomistyring"
        name="fields[customerNoteInterests][]"
      />
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Checkbox/Checkbox.scss'),
    },
  )
  .add(
    'Radiobuttons field',
    () => (
      <RadioButtons
        name="isLeader"
        options={object('Options', [
          { label: 'Ja', value: 'yes', defaultChecked: true },
          { label: 'Nei', value: 'no' },
        ])}
      />
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../RadioButtons/RadioButtons.scss'),
    },
  )
  .add(
    'Select',
    () => (
      <Select
        name="dropdown"
        label="Dette er en dropdown"
        options={['Val 1', 'Val 2']}
      />
    ),
    {
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Select/Select.scss'),
    },
  );
