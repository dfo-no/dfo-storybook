import React from "react";
import "./Checkbox.scss";

export default function Checkbox({ label, ...rest }) {
  const inputRef = React.createRef();
  return (
    <label htmlFor={rest.name} className="dfo-checkbox">
      <input
        ref={inputRef}
        type="checkbox"
        className="dfo-checkbox__input"
        {...rest}
      />
      <div
        className="dfo-checkbox__text"
        onClick={() => {
          inputRef.current.checked = !inputRef.current.checked;
        }}
      >
        {label}
      </div>
    </label>
  );
}