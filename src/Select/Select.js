import React from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

export default function Select({
  name, label, options = [], children = [],
}) {
  if (children.length > 0) {
    return <div className="dfo-select">{children}</div>;
  }
  return (
    <div className="dfo-select">
      {label && <label htmlFor={`select-${name}`}>{label}</label>}
      <select id={`select-${name}`} name={name}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
};

Select.defaultProps = {
  label: null,
};
