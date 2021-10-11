import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Burger from './HeaderBurger';
import Logo from './Logo';
import Tr from './Translate';
import HeaderLanguageOptions from './HeaderLanguageOptions';

import './Header.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    /**
     * We only keep an internal open/close state if isOpen
     * was not passed in, into this component.
     */
    this.state = {
      isOpen: props.isOpen === null ? false : undefined,
    };
  }

  menuToggle = () => {
    if (typeof this.state.isOpen === 'undefined') {
      return this.props.onEvent({ type: 'menuToggle' });
    }
    return this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  isMenuOpen = () => {
    if (typeof this.state.isOpen === 'undefined') {
      return this.props.isOpen;
    }
    return this.state.isOpen;
  };

  languageSelectionHandler = ({ languageCode: selectedLanguageCode }) => {
    this.props.onEvent({ type: 'languageSelect', selectedLanguageCode });
    // If header has state (uncontrolled mode), close menu upon selection.
    if (this.state.isOpen === true) {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { links, languages } = this.props;
    const { languageCode: activeLanguageCode = 'no' } = this.props.languages.find(({ isActive }) => isActive) || {};
    return (
      <header
        className={classNames('dfo-header', {
          'dfo-header--menu-open': this.isMenuOpen(),
        })}
      >
        <div className="container container--flex">
          <div className="dfo-header__wrapper">
            <div className="dfo-header__wrapper__inner">
              <div className="dfo-header__logo-wrapper">
                <Logo type={activeLanguageCode} />
              </div>
              <div className="dfo-header__menu-toggle-wrapper">
                <button type="button" className="dfo-header__menu-toggle" onClick={this.menuToggle}>
                  <Tr id="Menu" code={activeLanguageCode} /> <Burger open={this.isMenuOpen()} />
                </button>
              </div>
            </div>
            <div className="dfo-header__menu">
              <div className="dfo-menu">
                {links.map((item) => (
                  <a className="dfo-menu__item" key={item.link} href={item.link}>
                    {item.title}
                  </a>
                ))}
                <HeaderLanguageOptions languages={languages} onEvent={this.languageSelectionHandler} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      languageCode: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      isActive: PropTypes.bool,
    }),
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  isOpen: PropTypes.bool,
  onEvent: PropTypes.func,
};

Header.defaultProps = {
  links: [],
  languages: [],
  isOpen: null,
  onEvent: () => undefined,
};
