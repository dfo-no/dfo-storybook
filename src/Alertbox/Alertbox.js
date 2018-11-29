import React from "react";
import "./Alertbox.scss";
import alertIcon from "./alert.svg";

export default function Alertbox({ children = [], ...rest }) {
  return children.length > 0 ? (
    <div className="dfo-alertbox">
      <img className="dfo-alertbox__icon" src={alertIcon} alt="varsel icon" />
      <div className="dfo-alertbox__content">{children}</div>
    </div>
  ) : null;
}
