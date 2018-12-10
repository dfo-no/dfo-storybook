import React from "react";
import "./Footer.scss";
import NavSymbol from "./FooterNavSymbol";
import propTypes from 'prop-types';
import logo from "./logo-white.svg";

export default function Footer({
    links
  }) {
  if(links){
    return(
      <footer className="dfo-footer">
        <div className="container">
          <div className="row">
            <div className="small-12 medium-6 nav nav--nomargin nav--light">
              <ul className="nav__links nav__links--no-margin">
                { links.map(({ uri, title }) => (
                  <li key={uri} className="nav__item">
                    <a href={uri} className="nav__link">
                    <div className="nav__link__content">{title}</div>
                    <div className="nav__link__symbol">
                        <NavSymbol light />
                    </div>
                    </a>
                  </li>
                )) }
                </ul>
              </div>

            <div className="small-8 medium-3 medium-offset-1">
              <div className="dfo-footer__contact-wrapper">
                <img
                  src={logo}
                  alt="Direktoratet for Økonomistyrings logo"
                  className="dfo-footer__logo"
                />

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
  return(
    <footer className="dfo-footer dfo-footer--compact">
      <div className="container">
        <div className="row">

          <div className="small-12 medium-6 large-4">
            <img
              src={logo}
              alt="Direktoratet for Økonomistyrings logo"
              className="dfo-footer__logo"
            />
          </div>

          <div className="row small-12 medium-6 collapse">
            <div className="small-12 large-6">
              Karl Johans gate 37 B
              <br/>
              Pb 7154 St. Olavs plass, 0130 Oslo
            </div>

            <div className="small-12 large-5 large-offset-1">
              Tlf: <a href="tel:+4740007997">400 07 997</a>
              <br/>Org. nr. 986 252 932
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  links: propTypes.object,
};
