import React from 'react';
import PropTypes from 'prop-types';

import alertIcon from './alert.svg';

import './Alertbox.scss';

export default function Alertbox({ children = [] }) {
  return children.length > 0 ? (
    <div className="dfo-alertbox">
      <img className="dfo-alertbox__icon" src={alertIcon} alt="varsel icon" />
      <div className="dfo-alertbox__content">{children}</div>
    </div>
  ) : null;
}

Alertbox.propTypes = {
  children: PropTypes.any.isRequired,
};
