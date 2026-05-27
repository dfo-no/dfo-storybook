import type { Meta, StoryObj } from '@storybook/react';
import { withCSS } from '../../.storybook/static-css-addon/index';
import { fn } from 'storybook/test'; // Instead of addon-actions
import { Select } from './Select';
import { type SelectProps } from './Select';
import SCSS from './Select.scss?raw'; // Vite-specific syntax
import { useState } from 'react';


interface SelectOption {
  id: string,
  name: string,
  text: string,
}

const selectOptions: Record<string, SelectOption> = {
  1: {
    id: 'key1',
    name: 'name1',
    text: 'text1',
  },
  key2: {
    id: 'key2',
    name: 'name2',
    text: 'text2',
  },
};

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  decorators: [
    withCSS,
    (Story) => (
      <div style={{ maxWidth: '705px' }}>
        <Story />
      </div>
    ),
  ],
  args: { // Default values for selected properties
    onChange: fn(),
  },
  argTypes: { // Defines how each property is controlled in the Storybook UI by type
    onChange: {
      action: 'select-value-changed'
    },
    name: {
      control: 'text',
      description: 'Name attribute for the select element',
    },
    label: {
      control: 'text',
      description: 'Label for the select element',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the select element',
    },
    placeholderSelectable: {
      control: 'boolean',
      description: 'True: Placeholder value is available in dropdown to be selected. False: Placeholder is hidden from dropdown after intial select of value.',
    },
    displayAttr: {
      control: 'text',
      description: 'Custom display attribute for object options',
    },
    error: {
      control: 'text',
      description: 'Error message to display',
    }
  },
  parameters: {
    css: SCSS,
  }
};

export default meta;

type Story = StoryObj<typeof Select>;

// Function for setting value properly in a React controlled component using state variable and onChange.
const fnRender = (args: SelectProps) => {
  const [value, setValue] = useState(args.value);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    if (args.onChange) {
      args.onChange(e);
    }
  };

  return (
    <Select
      {...args}
      value={value}
      onChange={handleChange}
    />
  )
}

// Stories
export const Simple: Story = {
  render: fnRender,
  args: {
    name: 'dropdown',
    label: 'Dette er en dropdown',
    options: ['Val 1', 'Val 2'],
  },
};

export const WrappingAdvancedSelect: Story = {
  render: () => (
    <div style={{ maxWidth: '705px' }}>
      <Select name="advanced-select">
        <label htmlFor="section-select">Advanced select</label>
        <select name="advanced-select" id="section-select" onChange={fn()} defaultValue=''>
          <option value="" disabled>Ikke valgt</option>
          <optgroup label="Strategi- og fellestjenesteavdelingen">
            <option value="Seksjon for adm. og anskaffelser">Seksjon for adm. og anskaffelser (10)</option>
            <option value="Seksjon for informasjonsteknologi">Seksjon for informasjonsteknologi (22)</option>
            <option value="Seksjon for plan og styring">Seksjon for plan og styring (8)</option>
            <option value="Strategi- og fellestjenesteavdelingen">Strategi- og fellestjenesteavdelingen (1)</option>
          </optgroup>
          <optgroup label="Seksjon for pers.og org.utvikling">
            <option value="Seksjon for pers.og org.utvikling">Seksjon for pers.og org.utvikling (9)</option>
          </optgroup>
          <optgroup label="Regnskapsavdelingen">
            <option value="RA Applikasjon">RA Applikasjon (17)</option>
            <option value="RA Fagstøtte">RA Fagstøtte (23)</option>
            <option value="RA Fakturabehandling">RA Fakturabehandling (1)</option>
            <option value="RA Kundesenter">RA Kundesenter (19)</option>
            <option value="RA Regnskapsbehandling">RA Regnskapsbehandling (30)</option>
            <option value="RA Stab">RA Stab (18)</option>
          </optgroup>
          <optgroup label="Ra fakturabehandling">
            <option value="Team 1">Team 1 (15)</option>
            <option value="Team 2">Team 2 (7)</option>
            <option value="Team 3">Team 3 (8)</option>
          </optgroup>
          <optgroup label="Lønnsavdelingen">
            <option value="LA Applikasjon">LA Applikasjon (35)</option>
            <option value="LA Firmaforvaltning">LA Firmaforvaltning (27)</option>
            <option value="LA Kundesenter">LA Kundesenter (33)</option>
            <option value="LA Lønnsdata 1">LA Lønnsdata 1 (37)</option>
            <option value="LA Lønnskjøring">LA Lønnskjøring (34)</option>
            <option value="LA Stab">LA Stab (14)</option>
            <option value="LA Tid og reise">LA Tid og reise (1)</option>
          </optgroup>
          <optgroup label="La tid og reise">
            <option value="LA TR - Reiseteam 1">LA TR - Reiseteam 1 (10)</option>
            <option value="LA TR - Reiseteam 2">LA TR - Reiseteam 2 (10)</option>
            <option value="LA TR - Tid teamet">LA TR - Tid teamet (15)</option>
          </optgroup>
          <optgroup label="Forvaltnings og analyseavd.">
            <option value="ADM">ADM (2)</option>
            <option value="Regelverk">Regelverk (9)</option>
            <option value="Statlig regnskapsføring">Statlig regnskapsføring (9)</option>
            <option value="Styring">Styring (17)</option>
            <option value="Utredning og analyse">Utredning og analyse (5)</option>
          </optgroup>
          <optgroup label="Direktoratet for forvaltning og økonomistyring">
            <option value="Direktoratet for forvaltning og økonomistyring">Direktoratet for forvaltning og økonomistyring (1)</option>
            <option value="Forvaltnings og analyseavd.">Forvaltnings og analyseavd. (1)</option>
            <option value="Kommunikasjonsenheten">Kommunikasjonsenheten (9)</option>
            <option value="Lønnsavdelingen">Lønnsavdelingen (1)</option>
            <option value="Regnskapsavdelingen">Regnskapsavdelingen (1)</option>
          </optgroup>
        </select>
      </Select>
    </div>
  ),
};

export const Placeholder: Story = {
  render: fnRender,
  args: {
    label: 'Dropdown with placeholder',
    name: 'placeholder-select',
    placeholder: 'Select option',
    placeholderSelectable: true,
    options: ['valg 1', 'valg 2'],
    value: '',
  },
};

export const SelectedWithPlainStringOptions: Story = {
  render: fnRender,
  args: {
    label: 'Dropdown with selected value and plain string objects',
    name: 'placeholder-select',
    placeholder: 'Select option',
    options: ['valg 1', 'valg 2'],
    value: 'valg 2',
  },
};

export const DropdownWithError: Story = {
  render: fnRender,
  args: {
    label: 'Dropdown with error',
    name: 'placeholder-select',
    placeholder: 'Select option',
    options: ['valg 1', 'valg 2'],
    value: undefined,
    error: 'Not selected',
  },
};

export const OptionsAsObjects: Story = {
  render: fnRender,
  args: {
    label: 'Options as objects',
    name: 'placeholder-select',
    placeholder: 'Select option',
    options: selectOptions as Record<string, unknown>,
    value: 'key2',
  }
}

export const OptionsWithCustomDisplayAttribute: Story = {
  render: fnRender,
  args: {
    label: 'Options with custom display attribute',
    name: 'placeholder-select',
    placeholder: 'Select option',
    options: selectOptions as Record<string, unknown>,
    value: '1',
    displayAttr: 'name'
  }
}
