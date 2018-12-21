import React from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './Button.scss';

export default function Button({
  children = [],
  invert,
  cta,
  plainLink,
  onSubmit,
  type,
  ...rest
}) {
  const classes = classNames('dfo-button', {
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
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
};
