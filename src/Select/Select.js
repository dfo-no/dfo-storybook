import React from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

export default function Select({
  name, label, options, children, placeholder, ...rest
}) {
  if (children) {
    return <div className="dfo-select">{children}</div>;
  }
  return (
    <div className="dfo-select">
      {label && <label htmlFor={`select-${name}`}>{label}</label>}
      <select id={`select-${name}`} name={name} defaultValue="" {...rest}>
        { (placeholder || placeholder === '') && <option key="placeholder" value="" disabled>{placeholder}</option> }
        { options.map(option => {
            return (typeof option === "object") ? <option key={option.value} value={option.value}>{option.text}</option> : <option key={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array,
  children: PropTypes.any,
};

Select.defaultProps = {
  children: null,
  label: null,
  options: [],
};
