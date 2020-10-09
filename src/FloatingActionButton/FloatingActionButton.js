import React from 'react';
import PropTypes from 'prop-types';
import * as classNames from 'classnames';

import './FloatingActionButton.scss';

export default class FloatingActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.subComponentRef = React.createRef();

    this.state = {
      open: false,
    };
  }

  render() {
    const { SubComponent, type, absolute = false, chat = false, overRidePosition, danger, invert, cta, ...rest } = this.props;

    const { open } = this.state;

    const classes = classNames({
      'dfo-fab-button': !chat || !open,
      'dfo-fab-button--danger': !chat && danger,
      'dfo-fab-button--invert': !chat && invert,
      'dfo-fab-button--cta': !chat && cta,
    });

    // we filter away non-positional elements to disallow arbitrary css-changes
    const filteredPosition = overRidePosition && {
      ...(overRidePosition.bottom ? { bottom: overRidePosition.bottom } : {}),
      ...(overRidePosition.right ? { right: overRidePosition.right } : {}),
      ...(overRidePosition.top ? { top: overRidePosition.top } : {}),
      ...(overRidePosition.left ? { left: overRidePosition.left } : {}),
    };

    console.log(overRidePosition, filteredPosition);

    return (
      <>
        <div className={!absolute ? 'fab-wrapper' : 'fab-wrapper-absolute'} style={filteredPosition || null}>
          <div className="fab-content">
            {open && (
              <div ref={this.subComponentRef}>
                {' '}
                <SubComponent closeParent={() => this.setState({ open: !open })} />
              </div>
            )}
          </div>
          <div className="fab-button">
            <button
              type="button"
              className={!chat || open ? classes : null}
              {...rest}
              onClick={() => {
                console.log(open);
                this.setState({ open: !open }, () => {
                  console.log('setState callback', this.subComponentRef);

                  if (this.subComponentRef.current) {
                    console.log('setting focus');
                    // find all focusable sub-elements since only some of them are focusable
                    const focusable = this.subComponentRef.current.querySelectorAll(
                      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
                    );
                    if (focusable.length > 0) {
                      focusable[0].focus();
                    }
                  }
                });
              }}
            >
              <div className="fab-button-icon">
                {(function () {
                  if (!open) {
                    if (chat) {
                      return <ChatIcon />;
                    }
                    return <OpenIcon invert={invert || null} />;
                  }
                  return <CloseIcon invert={invert || null} />;
                }())}
              </div>
            </button>
          </div>
        </div>
      </>
    );
  }
}

const CloseIcon = ({ invert = false }) => (
  <div className="fab-button--background">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <title>cross1</title>

      <path
        fill={invert ? '#000' : '#FFF'}
        d="M17.14 16.799l13.841-13.841c0.313-0.313 0.313-0.819 0-1.132s-0.819-0.313-1.132 0l-13.841
        13.841-13.841-13.841c-0.313-0.313-0.819-0.313-1.132 0s-0.313 0.819 0 1.132l13.841
        13.841-13.841 13.841c-0.313 0.313-0.313 0.819 0 1.132 0.156 0.156 0.361 0.234 0.566
        0.234s0.41-0.078 0.566-0.234l13.841-13.841 13.841 13.841c0.156 0.156 0.361 0.234 0.566
        0.234s0.41-0.078 0.566-0.234c0.313-0.313 0.313-0.819 0-1.132l-13.841-13.841z"
      />
    </svg>
  </div>
);

const OpenIcon = ({ invert = false }) => (
  <div className="fab-button--background">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
      <title>question1</title>
      <path
        fill={invert ? '#000' : '#FFF'}
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

const ChatIcon = () => (
  <div>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="60px"
      height="50px"
      viewBox="0 0 90 78"
      enableBackground="new 0 0 90 78"
      xmlSpace="preserve"
    >
      {' '}
      <image
        id="image0"
        width="90"
        height="78"
        x="0"
        y="0"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABOCAMAAACXMfG9AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
  AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB7FBMVEUNKkoNKkoNKkoNKkoN
  KkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoN
  KkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoN
  KkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoN
  KkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoN
  KkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoN
  KkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoN
  KkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoN
  KkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkoNKkqQl6K5vcTe4OP////09fbS1dmssblv
  eYiepK7p6uzGyc4wQ1yAiZVIV2xdaXsl4WW/AAAAlHRSTlMACDNcgaK71d3s8fPkF1qY0Psof83+
  D2bGKpz2LqwtFJf9A2rv7h/CJVhekwyzshbOFdS5jYxNEOjpNsNEuB5xxRkYVInS6+r3rXxJwcBu
  G7A+vzSbEeVIggGxCr4NyAu1i05SvWLw5uf5JPiaImfyt2UTIHO8SwV0dZXH09kmtGHbbQkH7Z9M
  9IM8QXrjz7aZUycEPbRhSAAAAAFiS0dEmHbRBj4AAAAHdElNRQfkCgEPBAWsV/pGAAAD6ElEQVRY
  w8XY91vaQBgH8LhtrVuctQqiHWpb9x511FV3taLWWbXaXbvU7j3sPkhAAgH+0d4lASGLJJxPv7/4
  5JBPjvcuyV0I4n8mKjomNi4+IfHYcQBA0omE+LjYmOioiNnklNS0dCCR9LTUlGT9bkZmlgEoxJCV
  maHHzc7JBSqSm5OtEc7LL1ADoxTk52mATxYa1MJsYQpPqYSLio1aYBRjcZEK2FRi1gqjlJaYwsll
  p/XA7ICeUZbP6uoyl6RzSsUo1w+jlMsWpaIyMhmA8xXS8oWLkcoAZFVJyVXVkcsAVEvY2Rj6zPZb
  dOGbavDIANQIx7IWlwxAXahcr+mmoRxDfbDc0IhPBqCpIYguxikDUHwoN2u+1SnH2BygW/DKALT4
  5VbcMgCtPN2Gn27j5HaME88fQztLd0h9ZrWRlN1x4OSOKIqitdkdLC2xKHC6KD5uRh/dieRL4pln
  pQ5DMmFo+JlT3GrsgnS3qNnD9Zc+INm/umjQDekeYSODqkF6AyfxKdK0DN0DadFTC5XDxQS+SHpY
  +oAmKZeNa2ZoB0U5aIaDKckTV0Ja9HBxw3+1Bjrl5X80FzuyffbAMMjTvZC+LGxEX2RE9eRjg0do
  CEgXeyBP90G6X2JcKImmAydyXAB4ueq62QPglKl1P6RFjXZJGnXXxn/ihPXyurkDORpI9RoOEeUJ
  1NrJ0zQ/G9Chx01ydVCgCyDdJ2yk/RcKYGefnRbSqPOUy6VMo1r3ChsZVBEHN6/t3GwJoX3cEa1M
  oxkyIGq1hlyNpLAgNDeDHIc0DRgRMgDpQfEZbUH3ELtPSKNL1EGTfK29MpNvENJDEr/GavfLjuA7
  H18DbgxJfkxt0vQQpIskn7lWt0t8v+ZpBnbZQfv8Vxa6A1iF3zeyO5Ar4AgyzD4KRo6CHmHpUcyr
  ELYeo9xzdww/PcYvFsbx0+P+Nc4EbnkisDCbxL3mmzxcT17FS+cHLYKnpnHK01PBa/dWjCUxXAvd
  cczgo2cE2yTLLC551iLc3c3N45Hn58R70usLOOQFyV16NgZ7QeYl1+JSpPLSIiET03Jk8rLSS6KV
  Pv2weZVQTJfu1wA3yogwsayt64E31izhZJib2uHNOlWvP7c0w7du31EDE8RdjfC92lF1MEHc1+Ia
  Oh9UqIWJh5uq3f6ajm3VLswjIbBglmLNj3uezGlxCeJpYihhfEZYtlZ3dmf3nic2mddLG1/sze7u
  rG6pmWqClAjGaEU7IZOu0P3Y8EtssuVVMLzxWsfPlktdEPzm7Tt88PvUgPvh4zjGHhOf+A3T54kv
  X8O+nVef7W/7uaXff/z8tf/7z1+M3T2i/AM9ig3xGomd8wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAy
  MC0xMC0wMVQxNTowNDowNSswMzowMA7VvnMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTAtMDFU
  MTU6MDQ6MDUrMDM6MDB/iAbPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAA
  AABJRU5ErkJggg=="
      />
    </svg>
  </div>
);

CloseIcon.propTypes = {
  invert: PropTypes.bool,
};

CloseIcon.defaultProps = {
  invert: false,
};

OpenIcon.propTypes = {
  invert: PropTypes.bool,
};
OpenIcon.defaultProps = {
  invert: false,
};

FloatingActionButton.propTypes = {
  cta: PropTypes.bool,
  invert: PropTypes.bool,
  danger: PropTypes.bool,
  SubComponent: PropTypes.any.isRequired,
  overRidePosition: PropTypes.object,
  chat: PropTypes.bool,
  absolute: PropTypes.bool,
  type: PropTypes.string,
};

FloatingActionButton.defaultProps = {
  cta: false,
  danger: false,
  invert: false,
  overRidePosition: { bottom: '10%', right: '2%' },
  chat: false,
  absolute: false,
  type: 'button',
};
