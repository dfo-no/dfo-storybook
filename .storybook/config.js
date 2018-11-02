import { configure, setAddon } from "@storybook/react";
import staticMarkup from "react-storybook-addon-static-markup";

setAddon(staticMarkup);

function loadStories() {
  require("../src/stories.index");
}

configure(loadStories, module);
