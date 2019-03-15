import React from 'react';
import PropTypes from 'prop-types';

import NavSymbol from './FooterNavSymbol';
import LogoWhite from './LogoWhite';

import './Footer.scss';

export default function Footer({
  links,
}) {
  if (links) {
    return (
      <footer className="dfo-footer">
        <div className="container">
          <div className="row">
            <div className="small-12 medium-6 dfo-nav dfo-nav--nomargin dfo-nav--light">
              <ul className="dfo-nav__links dfo-nav__links--no-margin">
                { links.map(({ uri, title }) => (
                  <li key={uri} className="dfo-nav__item">
                    <a href={uri} className="dfo-nav__link">
                      <div>{title}</div>
                      <div className="dfo-nav__link__symbol">
                        <NavSymbol light />
                      </div>
                    </a>
                  </li>
                )) }
              </ul>
            </div>

            <div className="small-8 medium-3 medium-offset-1">
              <div className="dfo-footer__contact-wrapper">
                <LogoWhite />

                <ul className="dfo-footer__contact">
                  <li>Karl Johans gate 37 B</li>
                  <li>Pb 7154 St. Olavs plass, 0130 Oslo</li>
                  <li>
                    Tlf: <a href="tel:+4740007997">400 07 997</a>
                  </li>
                  <li>Org. nr. 986 252 932</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="dfo-footer dfo-footer--compact">
      <div className="container">
        <div className="row">

          <div className="small-12 medium-6 large-4">
            <LogoWhite />
          </div>

          <div className="row small-12 medium-6 collapse">
            <div className="small-12 large-6">
              Karl Johans gate 37 B
              <br />
              Pb 7154 St. Olavs plass, 0130 Oslo
            </div>

            <div className="small-12 large-5 large-offset-1">
              Tlf: 400 07 997
              <br />Org. nr. 986 252 932
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    uri: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

Footer.defaultProps = {
  links: null,
};
