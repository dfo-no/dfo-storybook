import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Fieldset, Textarea } from '..';

storiesOf('Textarea', module)
  .add(
    'Textarea',
    () => (
      <Fieldset>
        <Textarea
          name="such-text"
          autosize={boolean('autosize to content', true)}
          label={text('label', 'What about dat Lorem ipsum?')}
          error={text('error message')}
        >
          {text('text', [
            'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
            'It has roots in a piece of classical Latin literature from 45 BC, ',
            'making it over 2000 years old. Richard McClintock, a Latin ',
            'professor at Hampden-Sydney College in Virginia, looked up one of ',
            'the more obscure Latin words, consectetur, from a Lorem Ipsum ',
            'passage, and going through the cites of the word in classical ',
            'literature, discovered the undoubtable source. Lorem Ipsum comes ',
            'from sections 1.10.32 and 1.10.33 of «de Finibus Bonorum et ',
            'Malorum» (The Extremes of Good and Evil) by Cicero, written in 45 ',
            'BC. This book is a treatise on the theory of ethics, very popular ',
            'during the Renaissance.',
          ].join(''))}
        </Textarea>
      </Fieldset>
    ),
    {
      /* eslint-disable import/no-webpack-loader-syntax */
      css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!../Textarea/Textarea.scss'),
      /* eslint-enable import/no-webpack-loader-syntax */
    },
  );
