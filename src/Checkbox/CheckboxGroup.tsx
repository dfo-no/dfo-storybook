import { type ReactNode } from 'react';
import classnames from 'classnames';
import './CheckboxGroup.scss';

interface CheckboxGroupProps {
  children: ReactNode,
  twoCols?: boolean,
}

export function CheckboxGroup({
  children,
  twoCols = false
}: CheckboxGroupProps) {
  return (
    <div
      className={classnames(
        'dfo-checkboxgroup',
        { 'dfo-checkboxgroup--two-cols': twoCols },
      )}
    >
      {children}
    </div>
  );
};
