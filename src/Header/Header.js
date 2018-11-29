import React from "react";
import * as classNames from "classnames";
import "./Header.scss";

import logo from "./dfo-logo.svg";

export default function Header({ links = [] }) {
  return (
    <header className="dfo-header">
      <img src={logo} alt="Direktoratet for Økonomistyrings logo" />
    </header>
  );
}
