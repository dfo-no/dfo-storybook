import { type ReactNode } from 'react';
import classNames from 'classnames';
import AccordionArrow from './AccordionArrow';

interface AccordionPanelProps {
  id: string,
  heading: string,
  children: ReactNode,
  isOpen: boolean,
  onClick: (args: { id: string }) => void,
}

export default function AccordionPanel({
  id,
  heading = '',
  isOpen = false,
  children = null,
  onClick,
  ...rest
}: AccordionPanelProps) {
  return (
    <li
      className={classNames('dfo-accordion__panel', {
        'dfo-accordion__panel--is-active': isOpen,
      })}
    >
      <button
        value={id}
        data-accordion-panel-id={id}
        onClick={() => onClick({ id })}
        {...rest}
        className="dfo-accordion-title"
        type="button"
      >
        <div className="dfo-accordion-title__content">{heading}</div>
        <div className="dfo-accordion-title__arrow">
          <AccordionArrow fill={isOpen ? '#fff' : undefined} active={isOpen} />
        </div>
      </button>
      <div
        className={classNames('dfo-accordion-content', {
          'dfo-accordion-content--is-active': isOpen,
        })}
      >
        {children}
      </div>
    </li>
  );
}
