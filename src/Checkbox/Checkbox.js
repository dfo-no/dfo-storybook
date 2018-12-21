import React from 'react';

import './Checkbox.scss';

export default function Checkbox({ label, description, ...rest }) {
  const labelKey = `checkbox-${label}`;
  return (
    <label htmlFor={labelKey} className="dfo-checkbox">
      <input
        id={labelKey}
        type="checkbox"
        className="dfo-checkbox__input"
        {...rest}
      />
      <div className="dfo-checkbox__text-wrapper">
        <div>{label}</div>
        {
          description && (
            <div className="dfo-checkbox__text-wrapper--extra-text">{description}</div>
          )
        }
      </div>
    </label>
  );
}
