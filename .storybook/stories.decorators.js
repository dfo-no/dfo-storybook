import React from "react";

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
