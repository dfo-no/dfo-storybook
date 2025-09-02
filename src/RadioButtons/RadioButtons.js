import React from 'react';
import PropTypes from 'prop-types';

import './RadioButtons.scss';

export default function RadioButtons({ name, options = [] }) {
  return (
    <div className="dfo-radio-buttons">
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
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

RadioButtons.defaultProps = {
  options: [],
};
