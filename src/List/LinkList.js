import React from "react";
import PropTypes from "prop-types";
import * as classNames from "classnames";
import "./LinkList.scss";
import LinkListSymbol from "./LinkListSymbol";

export default function LinkList({ title, links, invert }) {
  // string titles are rendered as h2 by default
  const HeadingComponent =
    typeof title === "string" ? (
      <h2 className="nav__heading">{title}</h2>
    ) : (
      <div className="nav__heading">{title}</div>
    );
  return (
    <div
      className={classNames("nav", {
        "nav--light": invert
      })}
    >
      {title && HeadingComponent}
      <ul className="nav__links">
        {links.map(({ text, link, externalLink, downloadLink }) => {
          const theLink = downloadLink || externalLink || link;
          return (
            <li key={theLink} className="nav__item">
              <a className="nav__link" href={theLink}>
                <div className="nav__link__content">{text}</div>
                <div className="nav__link__symbol">
                  <LinkListSymbol
                    light={invert}
                    external={!!externalLink}
                    download={!!downloadLink}
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

LinkList.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  invert: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        text: PropTypes.string,
        link: PropTypes.string
      }),
      PropTypes.shape({
        text: PropTypes.string,
        externalLink: PropTypes.string
      }),
      PropTypes.shape({
        text: PropTypes.string,
        downloadLink: PropTypes.string
      })
    ])
  )
};

LinkList.defaultProps = {
  title: "",
  invert: false,
  links: []
};
