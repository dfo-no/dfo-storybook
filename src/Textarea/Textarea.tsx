import React, { forwardRef } from 'react';
import classnames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

import './Textarea.scss';


export interface TextareaProps {
  id?: string,
  name: string,
  label?: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, // Required for controlled usage
  error?: string,
  autosize?: boolean,
  asterisk?: boolean,
}

// Using value-parameter as a controlled value => Textarea is a controlled component
function TextareaComponent ({
    id = undefined,
    name,
    label = undefined,
    value, // Controlled value
    onChange, // Controlled onChange handler
    error = undefined,
    autosize = false,
    asterisk = false,
    ...rest
  }: TextareaProps,
  ref: React.ForwardedRef<HTMLTextAreaElement>
) {

  const textareaProps = {
    id: id || `textarea-${name}`,
    name,
    required: !!asterisk,
    'aria-invalid': !!error,
    value, // Controlled value
    onChange, // Controlled onChange
    ref, // Forward ref to DOM element
    ...rest,
  };

  return (
    <label
      htmlFor={textareaProps.id}
      className={classnames('dfo-textarea', { 'dfo-textarea--is-error': error })}
    >
      <div
        className="dfo-error-wrapper"
        aria-live="assertive"
        aria-relevant="additions removals"
      >
        {label}
        {asterisk && <span className="dfo-required-asterisk">*</span>}
        {autosize
          ? ( <TextareaAutosize {...textareaProps} /> )
          : ( <textarea {...textareaProps} /> )
        }
        {error && <span className="dfo-error-wrapper__error">{error}</span>}
      </div>
    </label>
  );
};

TextareaComponent.displayName = 'Textarea';

// Wrap with forwardRef enable partly uncontrolled access and React.memo to mimic PureComponent behavior.
const forwardRefTextareaComponent = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  return TextareaComponent(props, ref);
});
const Textarea = React.memo(forwardRefTextareaComponent);
export { Textarea };
