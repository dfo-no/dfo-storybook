import React from 'react';
import PropTypes from 'prop-types';

import './RadioButtons.scss';

export default function RadioButtons({ name, legend, options = [] }) {
  return (
    <div
      className="dfo-radio-buttons"
      role="radiogroup"
      aria-label={name}
    >
      {
        legend && (
          <legend>{legend}</legend>
        )
      }
      {options.map(({ label, value, ...rest }) => {
        const key = `${name}-${value}`;
        return (
          <label key={key} htmlFor={key}>
            <input name={name} id={key} type="radio" value={value} {...rest} />
            {label}
          </label>
        );
      })}
    </div>
  );
}

RadioButtons.propTypes = {
  name: PropTypes.string.isRequired,
  legend: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

RadioButtons.defaultProps = {
  legend: null,
  options: [],
};
