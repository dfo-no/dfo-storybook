import type { Meta, StoryObj } from '@storybook/react';
import { withCSS } from '../../.storybook/static-css-addon/index';
import { fn } from 'storybook/test';
import { FloatingActionButton } from './FloatingActionButton';
import SCSS from './FloatingActionButton.scss?raw'; // Vite-specific syntax


const meta: Meta<typeof FloatingActionButton> = {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
  decorators: [withCSS],
  args: {
    onClick: fn(),    
  },
  argTypes: { // Optional: Add argTypes for controls, or other Storybook features.
    cta: { control: 'boolean' },
    invert: { control: 'boolean' },
    danger: { control: 'boolean' },
    chat: { control: 'boolean' },
    absolute: { control: 'boolean' },
    overridePosition: { control: 'object' },
    type: { control: 'text' },
  },
  parameters: { // Optional: Add global parameters here
    css: SCSS,
  }
}

const Chat = ({ closeParent }: { closeParent: () => void }) => (
  <>
    I am a sub-component that was passed in
    <br />
    <button type="button" onClick={closeParent}>
      Click me to close window{' '}
    </button>
  </>
);

export default meta;

type Story = StoryObj<typeof FloatingActionButton>;

// Stories
export const Basic: Story = {
  render: () => (
    <>
      <div style={{ height: '1500px' }} />
      <div style={{ position: 'absolute', bottom: 0 }}>
        <FloatingActionButton SubComponent={Chat} onClick={fn()} />
      </div>
    </>
  ),
};

export const ChatIconVersion: Story = {
  render: () => (
    <>
      <div style={{ height: '1500px' }} />
      <FloatingActionButton SubComponent={Chat} chat onClick={fn()} />
    </>
  ),
};

export const AbsolutePosition: Story = {
  render: () => (
    <>
      <div style={{ height: '1500px' }} />
      <FloatingActionButton SubComponent={Chat} absolute onClick={fn()} />
    </>
  ),
};

export const MovePosition: Story = {
  render: () => (
    <>
      <div style={{ height: '1500px' }} />
      <FloatingActionButton SubComponent={Chat} overridePosition={{ bottom: '40%', right: '20%' }} onClick={fn()} />
    </>
  ),
};

export const CallToAction: Story = {
  args: {
    cta: true,
    SubComponent: Chat,
    onClick: fn(),
  },
};

export const InvertedLightVersion: Story = {
  args: {
    invert: true,
    SubComponent: Chat,
    onClick: fn(),
  },
};

export const DangerButton: Story = {
  args: {
    danger: true,
    SubComponent: Chat,
    onClick: fn(),
  },
};
