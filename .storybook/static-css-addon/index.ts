// static-css-addon/index.ts
import { makeDecorator } from 'storybook/preview-api';
import { addons } from 'storybook/manager-api';

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