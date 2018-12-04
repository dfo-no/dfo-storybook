import React from 'react';
import PropTypes from 'prop-types';
import "./Header.scss";

export default function Burger({
  className, open, fill, width, height,
}) {
  if (open) {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 14 10.8"
        className={className}
      >
        <polygon
          style={{ fill }}
          points="10.8,1.1 9.7,0 5.4,4.3 1.1,0 0,1.1 4.3,5.4 0,9.7 1.1,10.8 5.4,6.5 9.7,10.8 10.8,9.7
        6.5,5.4 "
        />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 10.8"
      className={className}
    >
      <title>burger</title>
      <rect width="13.714" height="1.524" style={{ fill }} />
      <rect y="9.143" width="13.714" height="1.524" style={{ fill }} />
      <rect y="4.571" width="13.714" height="1.524" style={{ fill }} />
    </svg>
  );
}

Burger.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

Burger.defaultProps = {
  className: null,
  open: false,
  width: '14',
  height: '10.8',
  fill: '#032b4a',
};
