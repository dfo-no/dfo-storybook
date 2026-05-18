import React from 'react';
import classnames from 'classnames';
import './Select.scss';


export interface SelectProps {
  name: string,
  label?: string,
  options?: string[] | Record<string, unknown> | undefined,
  children?: React.ReactNode,
  placeholder?: string,
  placeholderSelectable?: boolean,
  displayAttr?: string,
  value?: string,
  error?: string,
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}

function isObjectWithDisplayAttr(
  value: unknown,
  displayAttr: string
): value is Record<string, string> {
  return (
    typeof value === 'object' &&
    value !== null &&
    displayAttr in value &&
    typeof (value as Record<string, unknown>)[displayAttr] === 'string'
  );
}

// Options can be expressed as either array of strings or an object with keys.
function parseSelectOptions(
  { 
    options, 
    displayAttr,
  }: {
    options?: string[] | Record<string, unknown>,
    displayAttr: string,
  }) {
  if (Array.isArray(options)) {
    return options.map((option) => (
      <option key={option} value={option}>{option}</option>
    ));
  }
  if (typeof options === 'object' && options !== null) {
    // Options as normalized object
    return Object.entries(options).map(([key, value]) => {
      if (isObjectWithDisplayAttr(value, displayAttr)) {
        return (
          <option key={key} value={key}>
            {value[displayAttr]}
          </option>
        );
      }
      return null;
    });
  }
  return [];
};

export function Select({
  name,
  displayAttr = 'text',
  label = undefined,
  options = [],
  children = null,
  placeholder = '',
  placeholderSelectable = true,
  value = undefined,
  error = undefined,
  ...rest
}: SelectProps) {
  if (children) {
    return <div className="dfo-select">{children}</div>;
  }

  // Placeholder rules:
  // Placeholder is specified and no value selected => display the placeholder
  // Placeholder is specified and placeholder is defined as selectable => display the placeholder

  const PLACEHOLDER_KEY = 'placeholder';
  const isPlaceholderSelectable = placeholderSelectable;
  const isPlaceholderSelected = (placeholder && (!value || isPlaceholderSelectable));
  const placeholderVisibleStyle = isPlaceholderSelectable && !value ? 'dfo-select__placeholder' : '';

  const selectOptions = parseSelectOptions({ options, displayAttr });

  return (
    <label
      htmlFor={`select-${name}`}
      className={classnames('dfo-select', { 'dfo-select--is-error': error })}
    >
      <div
        className="dfo-select dfo-error-wrapper"
        aria-live="assertive"
        aria-relevant="additions removals"
      >
        {label}

        <select
          aria-invalid={!!error}
          id={`select-${name}`}
          name={name}
          value={value ?? ''}
          className={isPlaceholderSelected ? placeholderVisibleStyle : ''}
          {...rest}
        >
          
          {isPlaceholderSelected && (
            <option key={PLACEHOLDER_KEY} value='' disabled={!isPlaceholderSelectable && !!value}>
              {placeholder}
            </option>
          )}

          {selectOptions}
        </select>

        {error && <span className="dfo-error-wrapper__error">{error}</span>}
      </div>
    </label>
  );
}
