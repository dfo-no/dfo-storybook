import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import Burger from './HeaderBurger';
import Logo from './Logo';

import './Header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  menuToggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  render() {
    const { links } = this.props;

    return (
      <header className={classNames('dfo-header', ({ 'dfo-header--menu-open': this.state.isOpen }))}>
        <div className="container container--flex">
          <div className="dfo-header__wrapper">
            <div className="dfo-header__wrapper__inner">
              <Logo />
              <div className="dfo-header__menu-toggle-wrapper">
                <button type="button" className="dfo-header__menu-toggle" onClick={this.menuToggle}>
                  Meny <Burger open={this.state.isOpen} />
                </button>
              </div>
            </div>
            <div className="dfo-header__menu">
              <div className="dfo-menu">
                {links.map((item) => (
                  <a className="dfo-menu__item" key={item.link} href={item.link}>{item.title}</a>
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
};

Header.defaultProps = {
  links: [],
};
