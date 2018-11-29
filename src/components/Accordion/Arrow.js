import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Arrow.scss";

export default function Arrow({ fill, modifier, large, active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 1 22 22"
      className={classNames("dfo-arrow", {
        [`dfo-arrow--${modifier}`]: modifier,
        "dfo-arrow--180": active,
        "dfo-arrow--large": large
      })}
    >
      <polygon
        style={{ fill }}
        points="6.9,16.3 0,9.4 0.7,8.7 6.9,14.9 13,8.7 13.7,9.4 "
      />
    </svg>
  );
}

Arrow.propTypes = {
  fill: PropTypes.string,
  modifier: PropTypes.string,
  active: PropTypes.bool,
  large: PropTypes.bool
};

Arrow.defaultProps = {
  fill: "#032b4a",
  modifier: null,
  active: false,
  large: false
};
