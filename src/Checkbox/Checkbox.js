import React from 'react';

import './Checkbox.scss';

export default function Checkbox({ label, ...rest }) {
  const { name } = rest;
  const labelKey = `checkbox-${name}`;
  return (
    <label htmlFor={labelKey} className="dfo-checkbox">
      <input
        id={labelKey}
        type="checkbox"
        className="dfo-checkbox__input"
        {...rest}
      />
      <div className="dfo-checkbox__text">{label}</div>
    </label>
  );
}
