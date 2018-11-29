import React from "react";
import * as classNames from "classnames";
import "./Button.scss";

export default function Button({
  children = [],
  invert,
  cta,
  plainLink,
  ...rest
}) {
  const classes = classNames("dfo-button", {
    "dfo-button--invert": invert,
    "dfo-button--cta": cta
  });
  if (plainLink) {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
