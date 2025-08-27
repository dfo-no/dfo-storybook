import React from "react";
// import addons, { makeDecorator } from "@storybook/addons";
import { addons } from "@storybook/manager-api";
import { makeDecorator } from "@storybook/preview-api";

export const withCSS = makeDecorator({
  name: "withCSS",
  parameterName: "css",
  // This means don't run this decorator if this decorator is not set
  skipIfNoParametersOrOptions: true,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();

    // Our simple API above simply sets the notes parameter to a string,
    // which we send to the channel
    channel.emit("WITHCSS/add_css", parameters);

    return getStory(context);
  }
});
