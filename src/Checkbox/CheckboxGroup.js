import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CheckboxGroup.scss';

export default class CheckboxGroup extends PureComponent {
  render() {
    const { twoCols, children } = this.props;
    return (
      <div
        className={classnames(
          'dfo-checkboxgroup',
          { 'dfo-checkboxgroup--two-cols': twoCols },
        )}
      >
        {children}
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  children: PropTypes.any.isRequired,
  twoCols: PropTypes.bool,
};

CheckboxGroup.defaultProps = {
  twoCols: false,
};
