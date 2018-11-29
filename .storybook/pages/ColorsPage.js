import React from "react";

// Currently this overview needs to be manually updated.
// unsure if we can remove the need for updating this overview when
// updating _colors.scss
const colors = [
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

const colorBoxes = {
  padding: "24px",
  margin: "0 auto",
  maxWidth: "500px"
};

const colorBox = {
  maxWidth: "500px",
  height: "100px",
  padding: "24px",
  textAlign: "right"
};

const colorName = {
  backgroundColor: "white"
};

export default function ColorsPage() {
  return (
    <div style={colorBoxes}>
      {colors.map(({ name, value }) => (
        <div key={name} style={{ ...colorBox, ...{ backgroundColor: value } }}>
          <span style={colorName}>{name}</span>
          <br />
          <span style={colorName}>{value}</span>
        </div>
      ))}
    </div>
  );
}
