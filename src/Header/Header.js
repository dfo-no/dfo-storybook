import React from "react";
import "./Header.scss";

import logo from "./dfo-logo.svg";

export default function Header({
  links = []
  }) {
    return (
      <header className="dfo-header dfo-header--menu-open">
        <div className="container container--flex">
          <div className="dfo-header__wrapper">
            <div className="dfo-header__wrapper__inner">
              <img src={logo} alt="Direktoratet for Økonomistyrings logo" />
            </div>
            <div className="dfo-header__menu">
              <div className="dfo-menu">
                {links.map((item, i) => (
                <a className="dfo-menu__item" key={i} href={item.link}>{item.title}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}
