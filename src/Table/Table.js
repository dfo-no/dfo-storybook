import React from 'react';
import PropTypes from 'prop-types';

import './Table.scss';

export default function Table({ children = [] }) {
  return <div className="dfo-table-wrapper">{children}</div>;
}

Table.propTypes = {
  children: PropTypes.any,
};

Table.defaultProps = {
  children: null,
};
