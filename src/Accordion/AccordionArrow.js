import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./AccordionArrow.scss";

export default function AccordionArrow({ fill, modifier, large, active }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 1 22 22"
      className={classNames("dfo-accordion-arrow", {
        [`dfo-accordion-arrow--${modifier}`]: modifier,
        "dfo-accordion-arrow--180": active,
        "dfo-accordion-arrow--large": large
      })}
    >
      <polygon
        style={{ fill }}
        points="6.9,16.3 0,9.4 0.7,8.7 6.9,14.9 13,8.7 13.7,9.4 "
      />
    </svg>
  );
}

AccordionArrow.propTypes = {
  fill: PropTypes.string,
  modifier: PropTypes.string,
  active: PropTypes.bool,
  large: PropTypes.bool
};

AccordionArrow.defaultProps = {
  fill: "#032b4a",
  modifier: null,
  active: false,
  large: false
};
