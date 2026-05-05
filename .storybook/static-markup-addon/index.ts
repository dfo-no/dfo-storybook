// static-markup-addon/index.ts
/*
index.ts (Decorator - runs in preview/iframe)
Purpose: Extracts static markup/HTML from story parameters and emits it via channel
Runs in: The story iframe (preview context)
What it does: Sends static markup/HTML data to the panel
Imported in: preview.ts
*/

// import { makeDecorator } from 'storybook/preview-api';
import React from 'react';
import { addons } from 'storybook/preview-api';
import type { Decorator } from '@storybook/react';
import { renderToStaticMarkup } from 'react-dom/server';

let currentStaticMarkup = '';

// Listen for requests from the panel
const channel = addons.getChannel();
channel.on('WITHMARKUP/request_static_markup', () => {
  channel.emit('WITHMARKUP/add_static_markup', currentStaticMarkup);
});

// Decorator to emit the `markup` parameter to the panel
export const withStaticMarkup: Decorator = (Story) => {  

  // Render the story to a string
  const staticMarkup = renderToStaticMarkup(React.createElement(Story));
  currentStaticMarkup = staticMarkup;

  // Send the rendered static markup to the panel
  channel.emit('WITHMARKUP/add_static_markup', staticMarkup);

  return React.createElement(Story);
};
