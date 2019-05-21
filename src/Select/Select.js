import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Select.scss';

export default function Select({
  name, valueAttr = 'value', textAttr = 'text', label, options, children, placeholder, value, error, ...rest
}) {
  if (children) {
    return <div className="dfo-select">{children}</div>;
  }

  const className = (value !== '') ? undefined : 'displayPlaceholder';

  return (
    <label
      htmlFor={`select-${name}`}
      className={classnames('dfo-select', { 'dfo-select--is-error': error })}
    >
      <div
        className="dfo-select dfo-error-wrapper"
        aria-live="assertive"
        aria-relevant="additions removals"
      >
      {label}
      <select aria-invalid={!!error} id={`select-${name}`} name={name} value={value} className={className} {...rest}>
        { (placeholder || placeholder === '') && <option key={placeholder} value='' disabled>{placeholder}</option> }
        { options.map(option => {
            return (typeof option === 'object') ? <option key={option[valueAttr]} value={option[valueAttr]}>{option[textAttr]}</option> : <option key={option}>{option}</option>;
        })}
      </select>
      {error && <span className="dfo-error-wrapper__error">{error}</span>}
    </div>
    </label>
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