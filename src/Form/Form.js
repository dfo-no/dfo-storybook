import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

export default function Form({ children }) {
  return <form className="dfo-form">{children}</form>;
}

Form.propTypes = {
  children: PropTypes.any,
};

Form.defaultProps = {
  children: [],
};
