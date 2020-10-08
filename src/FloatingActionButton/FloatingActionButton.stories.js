import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import PropTypes from 'prop-types';

import { FloatingActionButton } from '.';

const Chat = ({ closeParent }) => (
  <button type="button" onClick={() => closeParent()}>
    {' '}
    click me{' '}
  </button>
);

Chat.propTypes = {
  closeParent: PropTypes.func.isRequired,
};

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?outputStyle=compressed!./FloatingActionButton.scss'),
  /* eslint-enable import/no-webpack-loader-syntax */
};

storiesOf('FloatingActionButton', module).add(
  'Basic',
  () => (
    <div style={{ position: 'absolute bottom 0' }}>
      <FloatingActionButton onClick={action('clicked')} SubComponent={Chat}>
        {text('Text', 'Sign up for our newsletter')}
      </FloatingActionButton>
    </div>
  ),
  options,
);
