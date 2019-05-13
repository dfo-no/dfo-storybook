import React from 'react';
import PropTypes from 'prop-types';

import './Select.scss';

export default function Select({
  name, label, valueAttr = 'value', textAttr = 'text', options, children, placeholder, value, ...rest
}) {
  if (children) {
    return <div className="dfo-select">{children}</div>;
  }


  const className = (value !== '') ? undefined : 'displayPlaceholder';

  return (
    <div className="dfo-select">
      {label && <label htmlFor={`select-${name}`}>{label}</label>}
      <select id={`select-${name}`} name={name} value={value} className={className} {...rest}>
        { (placeholder || placeholder === '') && <option key={placeholder} value='' disabled>{placeholder}</option> }
        { options.map(option => {
            return (typeof option === 'object') ? <option key={option[valueAttr]} value={option[valueAttr]}>{option[textAttr]}</option> : <option key={option}>{option}</option>;
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
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  label: null,
  options: [],
};