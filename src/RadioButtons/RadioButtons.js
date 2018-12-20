import React from "react";
import "./RadioButtons.scss";

export default function RadioButtons({ name, legend, options = [] }) {
  return (
    <div
      className="dfo-radio-buttons"
      role="radiogroup"
      aria-label={name}
    >
      {
        legend && (
          <legend>{legend}</legend>
        )
      }
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
