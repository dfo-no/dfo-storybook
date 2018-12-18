import React from "react";
import "./RadioButtons.scss";

export default function RadioButtons({ name, options = [] }) {
  return (
    <div
      className="dfo-radio-buttons inner-wrapper"
      role="radiogroup"
      aria-label={name}
    >
      {options.map(({ label, value, ...rest }) => {
        const key = `${name}-${value}`;
        return (
          <label key={key} htmlFor={key}>
            <input name={name} id={key} type="radio" value={value} {...rest} />
            {label}
          </label>
        );
      })}
    </div>
  );
}
