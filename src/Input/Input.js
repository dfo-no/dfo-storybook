import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Input.scss';

const Input = ({
  label, name, error, ...rest
}) => {
  const { id = `input-${name}` } = rest;
  return (
    <label
      htmlFor={id}
      className={classnames('dfo-input', { 'dfo-input--is-error': error })}
    >
      <div className="dfo-error-wrapper">
        {label}
        <input name={name} {...{ ...rest, id }} />
        {error && <span className="dfo-error-wrapper__error">{error}</span>}
      </div>
    </label>
  );
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  error: '',
  id: '',
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.any,
};

export default Input;
