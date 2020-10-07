import React from 'react';
import PropTypes from 'prop-types';

import './FloatingActionButton.scss';
import chatIcon from './chatIcon.png';
import closeIcon from './closeIcon.png';

export default class FloatingActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { children = [], invert, danger, cta, plainLink, onSubmit, type, ...rest } = this.props;

    const { open } = this.state;

    return (
      <>
        <div className="fab-wrapper">
          <div className="fab-content">{open && children}</div>

          <button
            type="button"
            className="fab-button"
            {...rest}
            onClick={() => {
              console.log(open);
              this.setState({ open: !open });
            }}
          >
            <img alt="" src={open ? closeIcon : chatIcon} />
          </button>
        </div>
      </>
    );
  }
}

FloatingActionButton.propTypes = {
  cta: PropTypes.bool,
  invert: PropTypes.bool,
  danger: PropTypes.bool,
  plainLink: PropTypes.bool,
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.any.isRequired,
};

FloatingActionButton.defaultProps = {
  cta: false,
  danger: false,
  invert: false,
  plainLink: false,
  type: 'button',
  onSubmit: (f) => f,
};
