import React from 'react';
import { action } from 'storybook/actions';
// import { object } from '@storybook/addon-knobs';
import { Accordion } from '.';

export default {
  title: 'Accordion',
  component: Accordion,
  parameters: {
    css: [
      require('!to-string-loader!css-loader!sass-loader?!./Accordion.scss'),
      require('!to-string-loader!css-loader!sass-loader?!./AccordionArrow.scss'),
    ],
  }
};

export const Default = () => (
  <Accordion
    panels={object('Panels', [
      {
        heading: 'Something vague about the role structure',
        id: '1',
        content: <p>Text in an accordion panel</p>,
      },
      {
        heading: 'Function roles',
        id: '2',
        content: (
          <p>
            Really <strong>important</strong> content in bold
          </p>
        ),
      },
      {
        heading: 'Basis roles',
        id: '3',
        content: <p>Something about something in here</p>,
      },
    ])}
    onPanelClicked={action('onPanelClicked')}
  />
);
