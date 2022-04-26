import { configure, setAddon } from "@storybook/react";
import staticMarkup from "react-storybook-addon-static-markup";

setAddon(staticMarkup);
require("./stories.index"); // TODO: Needed?