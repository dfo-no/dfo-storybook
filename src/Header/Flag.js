/* eslint-disable no-tabs */
/* eslint max-len:0 */

import React from 'react';
import PropTypes from 'prop-types';

import FlagNO from './FlagNO.svg';
import FlagEN from './FlagEN.svg';

export default function Flag({ code, ...rest }) {
  let flagSrc = null;
  let titleText = '';
  switch (code) {
    case 'no':
      flagSrc = FlagNO;
      titleText = 'Norsk flagg';
      break;
    case 'en':
      flagSrc = FlagEN;
      titleText = 'English flag';
      break;
    default:
      return null;
  }
  return <img src={flagSrc} {...{title: titleText, ...rest}} />;
}

Flag.propTypes = {
  code: PropTypes.oneOf(['no', 'en']).isRequired,
};
