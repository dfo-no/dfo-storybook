import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Fieldset({ resetBackground, children }) {
  return (
    <fieldset className={classnames(
      'dfo-form__fieldset',
      {
        'dfo-form__fieldset--reset-background': resetBackground,
      },
    )}
    >{children}
    </fieldset>
  );
}

Fieldset.propTypes = {
  resetBackground: PropTypes.bool,
  children: PropTypes.any.isRequired,
};

Fieldset.defaultProps = {
  resetBackground: false,
};
