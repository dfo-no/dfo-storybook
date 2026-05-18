import { type ReactNode } from 'react';
import './Factbox.scss';

interface FactboxProps {
  children?: ReactNode;
}
export function Factbox({ children = [] }: FactboxProps) {
  return children != null ? (
    <div className="dfo-factbox">{children}</div>
  ) : null;
}
