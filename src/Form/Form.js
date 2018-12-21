import React from 'react';
import PropTypes from 'prop-types';

import './Form.scss';

export default function Form({ onChange, onSubmit, children }) {
  return <form className="dfo-form" onChange={onChange} onSubmit={onSubmit}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.any,
};

Form.defaultProps = {
  children: [],
};
