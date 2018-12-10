import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

import { Padding, ShowStaticMarkup } from "./stories.decorators";
import { TypographyPage, FormPage, ColorsPage } from "./pages";

addDecorator(Padding);
addDecorator(ShowStaticMarkup);

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Pages", module)
  .add("Typography", () => <TypographyPage />)
  .add("Colors: dfo.no", () => <ColorsPage />)
  .add("Complete form", () => <FormPage />);
