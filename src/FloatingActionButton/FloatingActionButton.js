import React from 'react';
import PropTypes from 'prop-types';

import './FloatingActionButton.scss';

export default class FloatingActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render() {
    const { SubComponent, type, absolute = false, ...rest } = this.props;

    const { open } = this.state;

    return (
      <>
        <div className={absolute ? 'fab-wrapper' : 'fab-wrapper-absolute'}>
          <div className="fab-content">{open && <SubComponent closeParent={() => this.setState({ open: !open })} />} </div>

          <button
            type="button"
            className="fab-button"
            {...rest}
            onClick={() => {
              console.log(open);
              this.setState({ open: !open });
            }}
          >
            <div className="fab-button-icon"> {open ? <CloseIcon /> : <ChatIcon />} </div>
          </button>
        </div>
      </>
    );
  }
}

FloatingActionButton.propTypes = {
  SubComponent: PropTypes.any.isRequired,
  absolute: PropTypes.bool,
  type: PropTypes.string,
};

FloatingActionButton.defaultProps = {
  absolute: false,
  type: 'button',
};

const CloseIcon = () => (
  <div className="fab-button-background">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <title>cross1</title>

      <path
        fill="#444"
        d="M17.14 16.799l13.841-13.841c0.313-0.313 0.313-0.819 0-1.132s-0.819-0.313-1.132 0l-13.841
        13.841-13.841-13.841c-0.313-0.313-0.819-0.313-1.132 0s-0.313 0.819 0 1.132l13.841
        13.841-13.841 13.841c-0.313 0.313-0.313 0.819 0 1.132 0.156 0.156 0.361 0.234 0.566
        0.234s0.41-0.078 0.566-0.234l13.841-13.841 13.841 13.841c0.156 0.156 0.361 0.234 0.566
        0.234s0.41-0.078 0.566-0.234c0.313-0.313 0.313-0.819 0-1.132l-13.841-13.841z"
      />
    </svg>
  </div>
);

const ChatIcon = () => (
  <div className="fab-button-background">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <title>question1</title>
      <path
        fill="#444"
        d="M15.207 27.204c-0.442 0-0.8-0.358-0.8-0.8v-4.802c0-0.442 0.358-0.8 0.8-0.8 4.855 0
        8.804-3.95 8.804-8.804s-3.95-8.804-8.804-8.804-8.804 3.95-8.804 8.804c0 0.442-0.358
        0.8-0.8 0.8s-0.8-0.358-0.8-0.8c0-5.737 4.668-10.405 10.405-10.405s10.405 4.668 10.405
        10.405c0 5.468-4.24 9.965-9.605 10.375v4.032c0 0.442-0.358 0.8-0.8 0.8zM15.207 32.006c-0.442
        0-0.8-0.358-0.8-0.8v-1.601c0-0.442 0.358-0.8 0.8-0.8s0.8 0.358 0.8 0.8v1.601c0 0.442-0.358
        0.8-0.8 0.8z"
      />
    </svg>
  </div>
);
