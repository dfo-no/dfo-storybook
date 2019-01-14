import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CheckboxGroup.scss';

export default class CheckboxGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    twoCols: PropTypes.bool,
  }

  static defaultProps = {
    twoCols: false,
  }

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
