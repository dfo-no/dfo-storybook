import React from "react";
// import { ShowStaticMarkup as SSM } from "react-storybook-addon-static-markup"; // TODO: StaticMarkup - Evaluate enabling after rewriting this functionality to fit better into Storybook 9.

export const DarkBackground = storyFn => {
  // if (!storyFn) return null;
  return (
    <div
      style={{
        backgroundColor: "#012a4c"
      }}
    >
      {storyFn()}
    </div>
  );
};

export const Padding = storyFn => {
  return (
    <div
      style={{
        padding: "24px"
      }}
    >
      {storyFn()}
    </div>
  );
};

// TODO: StaticMarkup - Evaluate enabling after rewriting this functionality to fit better into Storybook 9.
export const ShowStaticMarkup = storyFn => {
  // if (!storyFn) return null;
  return (
    <>{storyFn()}</>
    // <SSM>{storyFn()}</SSM>
  );
};
