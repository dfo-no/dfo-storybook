import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
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

storiesOf('FloatingActionButton', module)
  .add(
    'Basic',
    () => (
      <>
        <div style={{ height: '1500px' }} />
        <div style={{ position: 'absolute bottom 0' }}>
          <FloatingActionButton onClick={action('clicked')} SubComponent={Chat} />
        </div>
      </>
    ),
    options,
  )
  .add(
    'Chat icon version',
    () => (
      <>
        <div style={{ height: '1500px' }} />
        <FloatingActionButton onClick={action('clicked')} SubComponent={Chat} chat />
      </>
    ),
    options,
  )
  .add(
    'Absolute position',
    () => (
      <>
        <div style={{ height: '1500px' }} />

        <FloatingActionButton onClick={action('clicked')} SubComponent={Chat} absolute />
      </>
    ),
    options,
  )
  .add(
    'Move Position',
    () => (
      <>
        <div style={{ height: '1500px' }} />
        <FloatingActionButton onClick={action('clicked')} SubComponent={Chat} overRidePosition={{ bottom: '40%', right: '20%' }} />{' '}
      </>
    ),
    options,
  )
  .add('Call to action', () => <FloatingActionButton SubComponent={Chat} cta={boolean('cta', true)} onClick={action('clicked')} />, options)
  .add(
    'Inverted light version',
    () => <FloatingActionButton SubComponent={Chat} invert={boolean('Invert', true)} onClick={action('clicked')} />,
    options,
  )
  .add('Danger button', () => <FloatingActionButton SubComponent={Chat} danger={boolean('danger', true)} onClick={action('clicked')} />, options);
