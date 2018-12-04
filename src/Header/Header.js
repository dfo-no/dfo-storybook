import React from "react";
import "./Header.scss";
import propTypes from 'prop-types';
import classNames from "classnames";
import Burger from "./HeaderBurger";

import logo from "./dfo-logo.svg";

export default class Header extends React.Component{
  constructor(props){
    super(props)
    this.links,
    this.state = { isOpen: false },
    this.menuToggle = this.menuToggle.bind(this);
  }
  menuToggle(){
    this.setState({isOpen: !this.state.isOpen});
  }
  render(){
    const links = this.props.links;

    return (
      <header className={classNames("dfo-header", ({ "dfo-header--menu-open" : this.state.isOpen }))}>
        <div className="container container--flex">
          <div className="dfo-header__wrapper">
            <div className="dfo-header__wrapper__inner">
              <img src={logo} alt="Direktoratet for Økonomistyrings logo" />
              <div className="dfo-header__menu-toggle-wrapper">
                <button type="button" className="dfo-header__menu-toggle" onClick={this.menuToggle}>
                  Meny <Burger open={this.state.isOpen} />
                </button>
              </div>
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
}

Header.propTypes = {
  links: propTypes.array,
  menuToggle: propTypes.func
}

Header.defaultProps = {
  links: [],
};

