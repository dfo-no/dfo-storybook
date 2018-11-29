import React from "react";
import "./Input.scss";

export default function Input({ label, ...rest }) {
  const { name } = rest;
  return (
    <div className="dfo-input">
      <label htmlFor={name} className="dfo-input__label">
        {label}
        <input className="dfo-input__input" {...rest} />
      </label>
    </div>
  );
}
