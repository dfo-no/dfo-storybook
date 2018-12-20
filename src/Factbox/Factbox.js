import React from 'react';
import PropTypes from 'prop-types';

import './Factbox.scss';

export default function Factbox({ children = [] }) {
  return children.length > 0 ? (
    <div className="dfo-factbox">{children}</div>
  ) : null;
}

Factbox.propTypes = {
  children: PropTypes.any,
};

Factbox.defaultProps = {
  children: [],
};
