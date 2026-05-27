// static-css-addon/index.ts
/*
index.ts (Decorator - runs in preview/iframe)
Purpose: Extracts CSS from story parameters and emits it via channel
Runs in: The story iframe (preview context)
What it does: Sends CSS data to the panel
Imported in: preview.ts
*/

import { makeDecorator } from 'storybook/preview-api';
import { addons } from 'storybook/preview-api';

export const withCSS = makeDecorator({
  name: 'withCSS',
  parameterName: 'css',
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();
    channel.emit('WITHCSS/add_css', parameters);
    return getStory(context);
  },
});