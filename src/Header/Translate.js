import React from 'react';
import PropTypes from 'prop-types';

const translations = {
  enMenu: 'Menu',
  noMenu: 'Meny',
};

export default class Translate extends React.PureComponent {
  render() {
    const { id, code } = this.props;
    return translations[`${code}${id}`];
  }
}

Translate.propTypes = {
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
