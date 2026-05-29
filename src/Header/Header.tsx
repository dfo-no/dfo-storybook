import { useState } from 'react';
import classNames from 'classnames';
import { Burger } from './HeaderBurger';
import { Logo } from './Logo';
import { Translate as Tr } from './Translate';
import { HeaderLanguageOptions, type LanguageOptionProps } from './HeaderLanguageOptions';
import './Header.scss';


interface LinkProps {
  link?: string,
  title?: string,
}

interface HeaderProps {
  languages: LanguageOptionProps[],
  links: LinkProps[],
  isOpen?: boolean,
  // onEvent?: (language: LanguageOptionProps) => void,
  onEvent?: (event: { type: string; selectedLanguageCode?: string }) => void,
  notes?: string,
}

export function Header ({
  languages = [],
  links = [],
  isOpen: isOpenProp,
  onEvent = () => {},
}: HeaderProps) {

  const [internalIsOpen, setInternalIsOpen] = useState<boolean | undefined>(
    isOpenProp === undefined ? false : undefined
  );

  const isMenuOpen = () => {
    if (typeof internalIsOpen === 'undefined') {
      return !!isOpenProp;
    }
    return internalIsOpen;
  };

  const menuToggle = () => {
    if (typeof internalIsOpen === 'undefined') {
      return onEvent({ type: 'menuToggle' });
    } else {
      return setInternalIsOpen(!internalIsOpen);
    }
  };

  const languageSelectionHandler = ({ languageCode: selectedLanguageCode }: LanguageOptionProps) => {
    onEvent({ type: 'languageSelect', selectedLanguageCode });
    // If header has state (uncontrolled mode), close menu upon selection.
    if (internalIsOpen === true) {
      setInternalIsOpen(false);
    }
  };
  
  const { languageCode: activeLanguageCode = 'no' } = languages.find(({ isActive }) => isActive) || {};

  return (
    <header
      className={classNames('dfo-header', {
        'dfo-header--menu-open': isMenuOpen(),
      })}
    >
      <div className="container container--flex">
        <div className="dfo-header__wrapper">
          <div className="dfo-header__wrapper__inner">
            <div className="dfo-header__logo-wrapper">
              <Logo language={activeLanguageCode} />
            </div>
            <div className="dfo-header__menu-toggle-wrapper">
              <button type="button" className="dfo-header__menu-toggle" onClick={menuToggle}>
                <Tr id="Menu" code={activeLanguageCode} /> <Burger open={isMenuOpen()} />
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
              <HeaderLanguageOptions languages={languages} onEvent={languageSelectionHandler} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
