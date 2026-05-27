import classnames from 'classnames';
import './Checkbox.scss';


interface CheckboxProps {
  label: string,
  description?: string,
  inline?: boolean,
  asterisk?: boolean,
  name?: string,
  [key: string]: any, // Optional: Allow any additional props
}

export function Checkbox({
  label,
  description,
  inline = false,
  asterisk = false,
  ...rest
}: CheckboxProps) {
  // Remove whitespace from id and for
  const labelKey = `checkbox-${label.replace(/\s/g, '')}`;
  return (
    <label
      htmlFor={labelKey}
      className={classnames(
        'dfo-checkbox',
        { 'dfo-checkbox--inline': inline },
      )}
    >

      <input
        id={labelKey}
        type="checkbox"
        className="dfo-checkbox__input"
        required={!!asterisk}
        {...rest}
      />
      <div className="dfo-checkbox__text-wrapper">
        <span className="dfo-checkbox__label-text">{label}</span>
        {asterisk && <span className="dfo-required-asterisk">*</span>}
        {
          !inline && description && (
            <span className="dfo-checkbox__description">{description}</span>
          )
          }
      </div>
    </label>
  );
}
