import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Flag from './Flag';

/**
 * This component is responsible for showing language options
 *
 * Notes:
 * If there are a lot of options, consider adding dropdown
 * selection support.
 *
 * If the component should be used independently it should be
 * made less reliant on header css.
 */
export default class HeaderLanguageOptions extends React.PureComponent {
  render() {
    const { languages } = this.props;
    const { languageCode: activeLanguageCode = 'no' } = this.props.languages.find(({ isActive }) => isActive) || {};
    return (
      <>
        {languages.map((item) => {
          if (item.link) {
            return (
              <a
                className={classNames('dfo-menu__item', {
                  'dfo-menu__item--active': item.languageCode === activeLanguageCode,
                })}
                key={item.languageCode}
                href={item.link}
              >
                <Flag style={{ marginRight: '5px' }} code={item.languageCode} title="" />
                <span>{item.title}</span>
              </a>
            );
          }
          return (
            <div
              className={classNames('dfo-menu__item', {
                'dfo-menu__item--active': item.languageCode === activeLanguageCode,
              })}
              key={item.languageCode}
            >
              <button type="button" onClick={() => this.props.onEvent(item)}>
                <Flag style={{ marginRight: '5px' }} code={item.languageCode} title="" />
                <span>{item.title}</span>
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

HeaderLanguageOptions.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      languageCode: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      isActive: PropTypes.bool,
    }),
  ),
  onEvent: PropTypes.func,
};

HeaderLanguageOptions.defaultProps = {
  languages: [],
  onEvent: () => undefined,
};
