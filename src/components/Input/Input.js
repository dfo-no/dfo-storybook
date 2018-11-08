import React from "react";
import "./Input.scss";

export default function Input({ label, ...rest }) {
  return (
    <div className="dfo-input">
      <label for={rest.name} className="dfo-input__label">
        {label}
        <input className="dfo-input__input" {...rest} />
      </label>
    </div>
  );
}
