import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Select.scss';

// Options can be expressed as either array of strings or an object with keys.
function parseSelectOptions({ options, displayAttr }) {
  if (Array.isArray(options)) {
    return options.map((option) => (
      <option key={option}>{option}</option>
    ));
  }
  if (typeof options === 'object') {
    // Options as normalized object
    return Object.entries(options).map(([key, value]) => (
      <option key={key} value={key}>
        {value[displayAttr]}
      </option>
    ));
  }
  return [];
}

export default function Select({
  name,
  displayAttr,
  label,
  options,
  children,
  placeholder,
  value,
  error,
  ...rest
}) {
  if (children) {
    return <div className="dfo-select">{children}</div>;
  }

  const PLACEHOLDER_KEY = 'placeholder';
  let placeholderOptionSelected = false;
  let placeholderVisibleStyle;

  // Placeholder is specified and no value selected => display the placeholder
  if (placeholder && !value) {
    placeholderOptionSelected = PLACEHOLDER_KEY;
    placeholderVisibleStyle = 'dfo-select__placeholder';
  }

  const selectOptions = parseSelectOptions({ options, displayAttr });

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

        <select
          aria-invalid={!!error}
          id={`select-${name}`}
          name={name}
          value={value || placeholderOptionSelected || undefined}
          className={placeholderVisibleStyle}
          {...rest}
        >
          {(placeholder || placeholder === '') && (
            <option key={placeholder} value={placeholder} disabled>
              {placeholder}
            </option>
          )}

          {selectOptions}
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
    PropTypes.object,
  ]),
  children: PropTypes.any,
  placeholder: PropTypes.string,
  displayAttr: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  children: null,
  label: null,
  options: [],
  displayAttr: 'text',
  placeholder: null,
  value: null,
  error: null,
};
