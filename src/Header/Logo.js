import React from 'react';
import PropTypes from 'prop-types';
// import { ReactComponent as DefaultLogo } from './logo-blue.svg';
// import { ReactComponent as EnglishLogo } from './logo-english.svg';

import DefaultLogo from './logo-blue.svg';
import EnglishLogo from './logo-english.svg';

export default function Logo({ type, ...restOfSvgAttributes }) {
  if (type === 'en') {
    return <EnglishLogo {...{ title: 'Logo: The Norwegian Agency for Public and Financial Management', ...restOfSvgAttributes }} />;
  }
  return <DefaultLogo {...{ title: 'Logo: Direktoratet for forvaltning og økonomistyring', ...restOfSvgAttributes }} />;
}

Logo.propTypes = {
  type: PropTypes.oneOf(['en']),
};

Logo.defaultProps = {
  type: '',
};
