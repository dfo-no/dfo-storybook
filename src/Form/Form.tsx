import { type FormEvent, type ReactNode } from 'react';
import './Form.scss';

interface FormProps {
  children: ReactNode,
  className?: string,
  method?: string,
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void,
}

export function Form({ 
  children, 
  className, 
  ...rest 
}: FormProps) {
  return <form className="dfo-form" {...rest}>{children}</form>;
}
