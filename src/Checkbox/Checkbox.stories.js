import React from 'react';
import { storiesOf } from '@storybook/react';

import { Form, Fieldset, Checkbox } from '..';
import { CheckboxGroup } from '.';

storiesOf('Checbox', module)
  .add(
    'Simple field',
    () => (
      <Checkbox
        label="Nyhetsbrev om virksomhets- og økonomistyring"
        name="fields[customerNoteInterests][]"
      />
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Checkbox/Checkbox.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  )
  .add(
    'Checbox field with description',
    () => (
      <Checkbox
        name="ledercheck"
        label="Del 1"
        description="
          Her er det litt plass til tekst om noe om etteller annet eller litt
          til. Her er det litt plass til tekst om noe om etteller annet eller litt til.
        "
      />
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Checkbox/Checkbox.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  )
  .add(
    'Checbox fields list',
    () => (
      <div>
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
      </div>
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Checkbox/Checkbox.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  )
  .add(
    'Inline checbox fields',
    () => (
      <div>
        <Checkbox
          inline
          name="first"
          label="The first option"
        />
        <Checkbox
          inline
          name="second"
          label="A short one"
        />
        <Checkbox
          inline
          name="third"
          label="An even longer option title"
        />
        <Checkbox
          inline
          name="fifth"
          label="Foobar"
        />
        <Checkbox
          inline
          name="sixth"
          label="Booboo"
        />
      </div>
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Checkbox/Checkbox.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  )
  .add(
    'Two column layout checbox fields',
    () => (
      <Form>
        <Fieldset legend="Har du noen allergier?">
          <CheckboxGroup twoCols>
            {[
              'Mandler', 'Laktose', 'Aprikos',
              'Fisk', 'Hasselnøtter', 'Hvalnøtter',
              'Gluten', 'Vann', 'Grønnsaker',
              'Salt', 'Sukker',
            ].map(allergen => (
              <Checkbox
                key={allergen}
                name="allergi"
                label={allergen}
              />
            ))}
          </CheckboxGroup>
        </Fieldset>
      </Form>
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Checkbox/Checkbox.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  );
