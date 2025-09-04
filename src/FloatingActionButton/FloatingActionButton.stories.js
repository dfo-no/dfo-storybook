import React from 'react';
import { action } from 'storybook/actions';
import PropTypes from 'prop-types';
import { FloatingActionButton } from '.';

const Chat = ({ closeParent }) => (
  <>
    I am a sub-component that was passed in
    <br />
    <button type="button" onClick={() => closeParent()}>
      {' '}
      click me to close window{' '}
    </button>
  </>
);

Chat.propTypes = {
  closeParent: PropTypes.func.isRequired,
};

const options = {
  /* eslint-disable import/no-webpack-loader-syntax */
  css: require('!to-string-loader!css-loader!sass-loader?!./FloatingActionButton.scss'),
  /* eslint-enable import/no-webpack-loader-syntax */
};

export default {
  title: 'FloatingActionButton',
  component: FloatingActionButton,
  parameters: [
    options,
  ],
  argTypes: {
    onClick: { action: 'clicked', description: 'Function to call when the button is clicked' },
    SubComponent: { control: 'object', description: 'Sub-component to render inside the button' },
    chat: { control: 'boolean', description: 'Use chat icon instead of default icon' },
    absolute: { control: 'boolean', description: 'Position the button absolutely' },
    overRidePosition: { control: 'object', description: 'Override the default position of the button' },
    cta: { control: 'boolean', description: 'Call to action style' },
    invert: { control: 'boolean', description: 'Invert colors for light version' },
    danger: { control: 'boolean', description: 'Danger style for the button' },
  },
};


const TemplateBasic = (args) => (
  <>
    <div style={{ height: '1500px' }} />
    <div style={{ position: 'absolute', bottom: 0 }}>
      <FloatingActionButton {...args} />
    </div>
  </>
);

export const Basic = TemplateBasic.bind({});
Basic.args = {
  onClick: action('clicked'),
  SubComponent: Chat,
};

// Replaced with TemplateBasic above
// export const Basic = () => (
//   <>
//     <div style={{ height: '1500px' }} />
//     <div style={{ position: 'absolute', bottom: 0 }}>
//       <FloatingActionButton onClick={action('clicked')} SubComponent={Chat} />
//     </div>
//   </>
// );


const TemplateSimple = (args) => (
  <>
    <div style={{ height: '1500px' }} />
    <FloatingActionButton {...args} />
  </>
);

export const ChatIconVersion = TemplateSimple.bind({});
ChatIconVersion.args = {
  onClick: action('clicked'),
  SubComponent: Chat,
  chat: true,
};

// Replaced with TemplateSimple above
// export const ChatIconVersion = () => (
//   <>
//     <div style={{ height: '1500px' }} />
//     <FloatingActionButton onClick={action('clicked')} />
//   </>
// );

export const AbsolutePosition = TemplateSimple.bind({});
AbsolutePosition.args = {
  onClick: action('clicked'),
  SubComponent: Chat,
  absolute: true,
};

// Replaced with TemplateSimple above
// export const AbsolutePositionn = () => (
//   <>
//     <div style={{ height: '1500px' }} />
//     <FloatingActionButton onClick={action('clicked')} SubComponent={Chat} absolute />
//   </>
// );

export const MovePosition = TemplateSimple.bind({});
MovePosition.args = {
  onClick: action('clicked'),
  SubComponent: Chat,
  overRidePosition: { bottom: '40%', right: '20%' },
};

// export const MovePosition = () => (
//   <>
//     <div style={{ height: '1500px' }} />
//     <FloatingActionButton onClick={action('clicked')} SubComponent={Chat} overRidePosition={{ bottom: '40%', right: '20%' }} />
//   </>
// );

export const CallToAction = TemplateSimple.bind({});
CallToAction.args = { 
  onClick: action('clicked'),
  SubComponent: Chat,
  cta: true,
};

// export const CallToAction = () => (
//   <FloatingActionButton SubComponent={Chat} cta={boolean('cta', true)} onClick={action('clicked')} />
// );

export const InvertedLightVersion = TemplateSimple.bind({});
InvertedLightVersion.args = { 
  onClick: action('clicked'),
  SubComponent: Chat,
  invert: true,
};

// export const InvertedLightVersion = () => (
//   <FloatingActionButton SubComponent={Chat} invert={boolean('Invert', true)} onClick={action('clicked')} />
// );

export const DangerButton = TemplateSimple.bind({});
DangerButton.args = { 
  onClick: action('clicked'),
  SubComponent: Chat,
  danger: true,
};

// export const DangerButton = () => (
//   <FloatingActionButton SubComponent={Chat} danger={boolean('danger', true)} onClick={action('clicked')} />
// );
