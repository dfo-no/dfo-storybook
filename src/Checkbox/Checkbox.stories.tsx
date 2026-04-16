import type { Meta, StoryObj } from '@storybook/react';
import { withCSS } from '../../.storybook/static-css-addon';
import Checkbox from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import { Form, Fieldset } from '../index';
import SCSS from './Checkbox.scss?raw'; // Vite-specific syntax
import SCSSGroup from './CheckboxGroup.scss?raw'; // Vite-specific syntax

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: [withCSS],
  args: {},
  argTypes: {},
  parameters: {
    css: [SCSS, SCSSGroup], // This will apply to all stories
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// Stories
export const SimpleField: Story = {
  args: {
    name: 'fields[customerNoteInterests][]',
    label: 'Nyhetsbrev om virksomhets- og økonomistyring',
  },
};

export const SimpleFieldWithRequired: Story = {
  args: {
    name: 'fields[customerNoteInterests][]',
    label: 'Nyhetsbrev om virksomhets- og økonomistyring',
    asterisk: true,
  },
};

export const CheckboxFieldWithDescription: Story = {
  args: {
    name: 'ledercheck',
    label: 'Del 1',
    description: `
      Her er det litt plass til tekst om noe, om ett eller annet eller litt
      til. Her er det litt plass til tekst om noe om ett eller annet eller litt til.
    `,
  },
};

export const CheckboxFieldsList: Story = {
  render: () => (
    <div>
      <Checkbox
        name="ledercheck"
        label="Del 1"
        description="
            Her er det litt plass til tekst om noe, om ett eller annet eller litt
            til. Her er det litt plass til tekst om noe om ett eller annet eller litt til.
          "
      />
      <Checkbox
        name="ledercheck"
        label="Del 2"
      />
    </div>
  ),
};

export const InlineCheckboxFields: Story = {
  render: () => (
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
};

export const TwoColumnLayoutCheckboxFields: Story = {
  render: () => (
    <Form>
      <Fieldset legend="Har du noen allergier?">
        <CheckboxGroup twoCols>
          {[
            'Mandler', 'Laktose', 'Aprikos',
            'Fisk', 'Hasselnøtter', 'Hvalnøtter',
            'Gluten', 'Vann', 'Grønnsaker',
            'Salt', 'Sukker',
          ].map((allergen) => (
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
};
