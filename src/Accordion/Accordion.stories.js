import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withCSS } from '../../.storybook/static-css-addon';
import { Accordion } from '.';

storiesOf('Accordion', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .addDecorator(withCSS)
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
      css: [
        require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./Accordion.scss'),
        require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./AccordionArrow.scss'),
      ],
    },
  );
