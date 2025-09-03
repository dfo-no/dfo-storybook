import React from 'react';
import PropTypes from 'prop-types';

import DefaultLogo from './logo-blue.svg';
import EnglishLogo from './logo-english.svg';

export default function Logo({ type, ...restOfSvgAttributes }) {  
  const src = type === 'en' ? EnglishLogo : DefaultLogo;
  const titleText = type === 'en' ? 'Logo: The Norwegian Agency for Public and Financial Management' : 'Logo: Direktoratet for forvaltning og økonomistyring';
  return <img src={src} {...{title: titleText, ...restOfSvgAttributes}} />;
}

Logo.propTypes = {
  type: PropTypes.oneOf(['en']),
};

Logo.defaultProps = {
  type: '',
};
