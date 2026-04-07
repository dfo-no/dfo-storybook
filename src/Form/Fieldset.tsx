import { type ReactNode } from 'react';
import classnames from 'classnames';

interface FieldsetProps {
  children: ReactNode,
  legend?: string,
  resetBackground?: boolean,
}

export default function Fieldset({ 
  children,
  legend, 
  resetBackground = false,
}: FieldsetProps) {
  return (
    <fieldset className={classnames(
      'dfo-form__fieldset',
      {
        'dfo-form__fieldset--reset-background': resetBackground,
      },
    )}
    >
      {legend ? <legend className="dfo-form__fieldset-title">{legend}</legend> : null}
      {children}
    </fieldset>
  );
}
