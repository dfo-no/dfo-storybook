// Currently this overview needs to be manually updated.
// unsure if we can remove the need for updating this overview when
// updating _colors.scss

import React, { type JSX } from "react";


// Define types for your color objects and styles
interface Color {
  name: string;
  value: string;
}

const colors: Color[] = [
  { name: "primary", value: "#012a4c" },
  { name: "primaryLight", value: "#005b91" },
  { name: "secondary", value: "#009fe3" },
  { name: "tertiary", value: "#00ab84" },
  { name: "warning", value: "#f7b715" },
  { name: "error", value: "#e83f53" },
  { name: "text", value: "#333333" },
  { name: "textonprimary", value: "#ffffff" },
  { name: "grayText", value: "#7f7f7f" },
  { name: "darkerbackground", value: "#efefef" },
  { name: "darkbackground", value: "#f7f7f7" },
  { name: "background", value: "#ffffff" },
  { name: "border", value: "#e6e6e6" },
  { name: "darkborder", value: "#d1d1d1" }
];

const colorBoxes: React.CSSProperties = {
  padding: "24px",
  margin: "0 auto",
  maxWidth: "500px"
};

const colorBox: React.CSSProperties = {
  maxWidth: "500px",
  height: "100px",
  padding: "24px",
  textAlign: "right"
};

// const colorName = {
//   backgroundColor: "white"
// };

const colorNameStyle: React.CSSProperties = {
  backgroundColor: "white"
};

interface ColorsPageProps {
  colors?: Color[];
}

export default function ColorsPage({ colors: propColors }: ColorsPageProps): JSX.Element {
  const finalColors = propColors || colors;
  
  return (
    <div style={colorBoxes}>
      {finalColors.map(({ name: colorName, value }) => (
        <div key={colorName} style={{ ...colorBox, backgroundColor: value }}>
          <span style={colorNameStyle}>{colorName}</span>
          <br />
          <span style={colorNameStyle}>{value}</span>
        </div>
      ))}
    </div>
  );
}
