import React from "react";
import * as classNames from "classnames";
import "./Button.scss";

export default function Button({ children = [], invert, cta, ...rest }) {
  return (
    <button
      className={classNames("dfo-button", {
        "dfo-button--invert": invert,
        "dfo-button--cta": cta
      })}
    >
      {children}
    </button>
  );
}
