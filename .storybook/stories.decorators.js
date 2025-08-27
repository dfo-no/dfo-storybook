import React from "react";
// import { ShowStaticMarkup as SSM } from "react-storybook-addon-static-markup"; // TODO: StaticMarkup - Evaluate enabling after rewriting this functionality to fit better into Storybook 9.

export const DarkBackground = storyFn => (
  <div
    style={{
      backgroundColor: "#012a4c"
    }}
  >
    {storyFn()}
  </div>
);

export const Padding = storyFn => (
  <div
    style={{
      padding: "24px"
    }}
  >
    {storyFn()}
  </div>
);

// export const ShowStaticMarkup = storyFn => <SSM>{storyFn()}</SSM>; // TODO: StaticMarkup - Evaluate enabling after rewriting this functionality to fit better into Storybook 9.
