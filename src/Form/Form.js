import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

export default function Form({ children, className, ...rest }) {
  return <form className="dfo-form" {...rest}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.any,
};

Form.defaultProps = {
  children: [],
};
