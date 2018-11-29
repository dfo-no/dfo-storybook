import React from "react";
import "./Factbox.scss";

export default function Factbox({ children = [], ...rest }) {
  return children.length > 0 ? (
    <div className="dfo-factbox">{children}</div>
  ) : null;
}
