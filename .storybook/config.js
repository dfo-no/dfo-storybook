import { configure, setAddon } from "@storybook/react";
import staticMarkup from "react-storybook-addon-static-markup";

setAddon(staticMarkup);
require("./stories.index");

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
