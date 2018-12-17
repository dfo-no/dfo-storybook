import React from "react";
import "./RadioButtons.scss";

export default function RadioButtons({ name, legend, options = [] }) {
  return (
    <fieldset className="dfo-radio-buttons inner-wrapper">
      {legend && <legend>{legend}</legend>}
      {options.map(({ label, value, ...rest }) => {
        const key = `${name}-${value}`;
        return (
          <label key={key} htmlFor={key}>
            <input name={name} id={key} type="radio" value={value} {...rest} />
            {label}
          </label>
        );
      })}
    </fieldset>
  );
}
