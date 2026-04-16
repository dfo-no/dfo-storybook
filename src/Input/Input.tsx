import classnames from 'classnames';
import './Input.scss';


interface InputProps {
  id?: string | undefined,
  name: string,
  label?: string,
  type: string,
  placeholder?: string,
  error?: any,
  asterisk?: boolean,
  disabled?: boolean,
}

export default function Input({
  name, 
  label = '', 
  type,
  placeholder = '',
  error = '', 
  asterisk = false,
  disabled = false,
  ...rest
}: InputProps) {

  const { id = `input-${name}` } = rest;

  return (
    <label
      htmlFor={id}
      className={classnames('dfo-input', { 'dfo-input--is-error': error })}
    >
      <span
        className="dfo-error-wrapper"
        aria-live="assertive"
        aria-relevant="additions removals"
      >
        {label}
        {asterisk && <span className="dfo-required-asterisk">*</span>}
        <input
          aria-invalid={!!error}
          name={name}
          required={asterisk}
          disabled={disabled}
          {...{ ...rest, id }}
        />

        {error && <span className="dfo-error-wrapper__error">{error}</span>}
      </span>
    </label>
  );
};
