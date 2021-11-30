import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Input.scss';

const Input = ({
  label, name, error, asterisk, ...rest
}) => {
  const { id = `input-${name}` } = rest;

  return (
    <label
      htmlFor={id}
      className={classnames('dfo-input', { 'dfo-input--is-error': error })}
    >
      <span
        className="dfo-error-wrapper"
        aria-live="assertive"
        aria-relevant="additions removals"
      >
        {label}
        {asterisk && <span className="dfo-required-asterisk">*</span>}
        <input
          aria-invalid={!!error}
          name={name}
          required={!!asterisk}
          {...{ ...rest, id }}
        />

        {error && <span className="dfo-error-wrapper__error">{error}</span>}
      </span>
    </label>
  );
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  error: '',
  id: undefined,
  asterisk: false,
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.any,
  asterisk: PropTypes.bool,
};

export default Input;
