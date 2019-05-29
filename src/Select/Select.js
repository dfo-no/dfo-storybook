import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Select.scss';

export default function Select({
  name, displayAttr, label, options, children, placeholder, value, error, ...rest
}) {
  if (children) {
    return <div className="dfo-select">{children}</div>;
  }

  const PLACEHOLDER_KEY = 'placeholder'  
  var placeholderOptionSelected = false
  var placeholderVisibleStyle = undefined;
  
  // Placeholder is specified and no value selected => display the placeholder
  if (placeholder && !value) {
    placeholderOptionSelected = PLACEHOLDER_KEY
    placeholderVisibleStyle = 'dfo-select__placeholder'
  }

  
  var selectOptions = null
  
  // Options as array of plain strings
  if (Array.isArray(options)) {
    
    selectOptions = options.map(option => (
      <option key={option}>{option}</option>
    ))

  // Options as normalized object
  } else if (typeof options === 'object') {
    
    selectOptions = Object.entries(options).map(([key, value]) => (
      <option key={key} value={key}>{value[displayAttr]}</option>
    ))
  } 


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

        <select aria-invalid={!!error} id={`select-${name}`} name={name} value={value || placeholderOptionSelected || undefined} className={placeholderVisibleStyle} {...rest}>
          
          { (placeholder || placeholder === '') && <option key={placeholder} value={PLACEHOLDER_KEY} disabled>{placeholder}</option> }
          
          { selectOptions }

        </select>

        {error && <span className="dfo-error-wrapper__error">{error}</span>}

      </div>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  children: PropTypes.any,
  placeholder: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  label: null,
  options: [],
  displayAttr: 'text',
  placeholder: null
};