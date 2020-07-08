/* eslint-disable no-tabs */
/* eslint max-len:0 */

import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as FlagNO } from './FlagNO.svg';
import { ReactComponent as FlagEN } from './FlagEN.svg';

export default function Flag({ code, ...rest }) {
  switch (code) {
    case 'no':
      return <FlagNO {...rest} />;
    case 'en':
      return <FlagEN {...rest} />;
    default:
      return null;
  }
}

Flag.propTypes = {
  code: PropTypes.oneOf(['no', 'en']).isRequired,
};
