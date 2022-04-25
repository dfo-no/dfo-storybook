import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { object } from '@storybook/addon-knobs';
import { Accordion } from '.';

storiesOf('Accordion', module)
  .add(
    'Accordion',
    () => (
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
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: [
        require('!to-string-loader!css-loader!sass-loader?!./Accordion.scss'),
        require('!to-string-loader!css-loader!sass-loader?!./AccordionArrow.scss'),
      ],
      /* eslint-disable import/no-webpack-loader-syntax */
    },
  );
