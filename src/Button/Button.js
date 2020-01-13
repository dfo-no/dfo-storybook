import React from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './Button.scss';

export default function Button({
  children = [],
  invert,
  danger,
  cta,
  plainLink,
  onSubmit,
  type,
  ...rest
}) {
  const classes = classNames('dfo-button', {
    'dfo-button--danger': danger,
    'dfo-button--invert': invert,
    'dfo-button--cta': cta,
  });

  if (plainLink) {
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={type} {...rest} onSubmit={onSubmit}>
      {children}
    </button>
  );
}

Button.propTypes = {
  cta: PropTypes.bool,
  invert: PropTypes.bool,
  danger: PropTypes.bool,
  plainLink: PropTypes.bool,
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  cta: false,
  danger: false,
  invert: false,
  plainLink: false,
  type: 'button',
  onSubmit: (f) => f,
};
