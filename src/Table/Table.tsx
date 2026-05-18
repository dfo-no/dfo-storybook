import { type ReactNode } from 'react';
import './Table.scss';


interface TableProps {
  children: ReactNode,
}

export function Table({ children = [] }: TableProps) {
  return <div className="dfo-table-wrapper">{children}</div>;
};
