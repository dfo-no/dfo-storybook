import type { Meta, StoryObj } from '@storybook/react-vite';
import { withCSS } from '../../.storybook/static-css-addon';
import Factbox from './Factbox';
import SCSS from './Factbox.scss?raw'; // Vite-specific syntax

const meta: Meta<typeof Factbox> = {
  title: 'Components/Factbox',
  component: Factbox,
  decorators: [withCSS],
  args: {},
  argTypes: {},
  parameters: {
    css: SCSS,
  },
};

export default meta;

type Story = StoryObj<typeof Factbox>;

// Stories
export const BasicFactbox: Story = {
  render: () => (
    <div>
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
    </div>
  ),
};

