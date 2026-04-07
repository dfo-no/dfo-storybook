import { type ReactNode } from 'react';
import './Form.scss';

interface FormProps {
  children: ReactNode,
  className?: string
}

export default function Form({ 
  children, 
  className, 
  ...rest 
}: FormProps) {
  return <form className="dfo-form" {...rest}>{children}</form>;
}
