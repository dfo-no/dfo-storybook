import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Checkbox.scss';

export default function Checkbox({
  label,
  description,
  inline,
  ...rest
}) {
  // Remove whitespace from id and for
  const labelKey = `checkbox-${label.replace(/\s/g, '')}`;
  return (
    <label
      htmlFor={labelKey}
      className={classnames(
        'dfo-checkbox',
        { 'dfo-checkbox--inline': inline },
      )}
    >
      <input
        id={labelKey}
        type="checkbox"
        className="dfo-checkbox__input"
        {...rest}
      />
      <div className="dfo-checkbox__text-wrapper">
        <span className="dfo-checkbox__label-text">{label}</span>
        {
          !inline && description && (
            <span className="dfo-checkbox__description">{description}</span>
          )
        }
      </div>
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  inline: PropTypes.bool,
};

Checkbox.defaultProps = {
  description: null,
  inline: false,
};
