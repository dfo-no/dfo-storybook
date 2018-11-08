import React from "react";
import classNames from "classnames";
import "./Button.scss";

export default function Button({ children = [], invert, ...rest }) {
  return (
    <button
      className={classNames("button", {
        "button--invert": invert
      })}
    >
      {children}
    </button>
  );
}
