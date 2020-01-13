import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Arrow } from '../Arrow';

import './Expand.scss';

export default class Expand extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  toggleOpen = () => this.setState(({ open }) => ({ open: !open }));

  render() {
    const { open } = this.state;
    const { title, children } = this.props;

    return (
      <div className={classnames('dfo-expand', { 'dfo-expand--open': open })}>
        <button
          className="dfo-expand__button"
          onClick={this.toggleOpen}
          type="button"
        >
          <Arrow active={open} /> {title}
        </button>
        {open ? <div>{children}</div> : null}
      </div>
    );
  }
}

Expand.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
