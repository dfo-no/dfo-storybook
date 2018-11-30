import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Arrow from "./Arrow";

export default function AccordionPanel({
  id,
  heading,
  content,
  isOpen,
  onClick,
  children,
  ...rest
}) {
  return (
    <li
      className={classNames("dfo-accordion__panel", {
        "dfo-accordion__panel--is-active": isOpen
      })}
    >
      <button
        value={id}
        onClick={() => onClick({ id })}
        {...rest}
        className="dfo-accordion-title"
      >
        <div className="dfo-accordion-title__content">{heading}</div>
        <div className="dfo-accordion-title__arrow">
          <Arrow fill={isOpen ? "#fff" : null} active={isOpen} />
        </div>
      </button>
      <div
        className={classNames("dfo-accordion-content", {
          "dfo-accordion-content--is-active": isOpen
        })}
      >
        {children}
      </div>
    </li>
  );
}

AccordionPanel.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

AccordionPanel.defaultProps = {
  heading: "",
  children: []
};
