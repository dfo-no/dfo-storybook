import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';

import { withCSS } from '../../.storybook/static-css-addon';
import { Select } from '..';

const options = {
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Select/Select.scss'),
};

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
  .addDecorator(withNotes)
  .add(
    'simple',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <Select name="dropdown" label="Dette er en dropdown" options={['Val 1', 'Val 2']} />
      </div>
    ),
    options,
  )
  .add(
    'wrapping advanced select',
    () => (
      <div style={{ maxWidth: '705px' }}>
        <Select>
          <label labelFor="section-select">Advanced select</label>
          <select name="advanced-select" id="section-select">
            <option value="">Ikke valgt</option>
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
            <optgroup label="Direktoratet for økonomistyring">
              <option value="Direktoratet for økonomistyring">Direktoratet for økonomistyring (1)</option>
              <option value="Forvaltnings og analyseavd.">Forvaltnings og analyseavd. (1)</option>
              <option value="Kommunikasjonsenheten">Kommunikasjonsenheten (9)</option>
              <option value="Lønnsavdelingen">Lønnsavdelingen (1)</option>
              <option value="Regnskapsavdelingen">Regnskapsavdelingen (1)</option>
            </optgroup>
          </select>
        </Select>
      </div>
    ),
    options,
  );
