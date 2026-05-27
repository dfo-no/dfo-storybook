import classNames from 'classnames';
import Flag from './Flag';
import { type AvailableLanguages } from '../types/utilTypes';


export interface LanguageOptionProps {
  languageCode: AvailableLanguages,
  title: string,
  link?: string,
  isActive?: boolean,
}

interface HeaderLanguageOptionsProps {
  languages?: LanguageOptionProps[],
  onEvent?: (language: LanguageOptionProps) => void,
}

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
export function HeaderLanguageOptions ({
  languages = [],
  onEvent = () => undefined,
}: HeaderLanguageOptionsProps) {

  const activeLanguageCode = languages.find(({ isActive }) => isActive)?.languageCode || 'no';

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
            <button type="button" onClick={() => onEvent(item)}>
              <Flag style={{ marginRight: '5px' }} code={item.languageCode} title="" />
              <span>{item.title}</span>
            </button>
          </div>
        );
      })}
    </>
  );  
}

// Enable memoization if performance is an issue.
// Profile first — only add React.memo if you've measured an actual performance problem.
// Uncomment if profiling shows unnecessary re-renders (and remember to remove the 'default' on the function itself):
// export default React.memo(HeaderLanguageOptions);
