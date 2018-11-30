import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { checkA11y } from "@storybook/addon-a11y";

import { Factbox } from ".";

storiesOf("Factbox", module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add("Factbox", () => (
    <Factbox>
      <h2>Nøkkeltall</h2>
      <ul>
        <li>420 ansatte (2017)</li>
        <li>
          84 prosent av alle statlige virksomheter bruker våre lønn- og
          regnskapstjenester (2016)
        </li>
        <li>195 047 lønns- og trekkoppgaver (2016)</li>
        <li>530 milliarder kroner utbetalt via økonomisystemet (2016)</li>
        <li>907 070 behandlede fakturaer (2016)</li>
        <li>
          65&nbsp;millioner transaksjoner gjennom
          statens&nbsp;konsernkontoordning (2015)
        </li>
        <li>
          227 statlige virksomheter innrapporterer til statsregnskapet (2015)
        </li>
      </ul>
    </Factbox>
  ));
