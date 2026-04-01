import { type ReactNode } from 'react';
import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
  children: ReactNode,
  invert?: boolean,
  danger?: boolean,
  cta?: boolean,
  plainLink?: boolean,
  onClick?: (value?: any) => any; // Replace with your function signature
  type?: 'button' | 'submit' | 'reset',
  href?: string,
  disabled?: boolean,
}

export default function Button({
  children = [],
  invert = false,
  danger = false,
  cta = false,
  plainLink = false,
  onClick,
  type = 'button',
  href,
  disabled = false,
  ...rest
}: ButtonProps) {

  const classes = classNames('dfo-button', {
    'dfo-button--danger': danger,
    'dfo-button--invert': invert,
    'dfo-button--cta': cta,
  });

  if (plainLink) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes} type={type} disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};
