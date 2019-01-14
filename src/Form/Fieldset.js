import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Fieldset({ resetBackground, legend, children }) {
  return (
    <fieldset className={classnames(
      'dfo-form__fieldset',
      {
        'dfo-form__fieldset--reset-background': resetBackground,
      },
    )}
    >
      {legend ? <legend className="dfo-form__fieldset-title">{legend}</legend> : null}
      {children}
    </fieldset>
  );
}

Fieldset.propTypes = {
  legend: PropTypes.string,
  resetBackground: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

Fieldset.defaultProps = {
  legend: null,
  resetBackground: false,
};
