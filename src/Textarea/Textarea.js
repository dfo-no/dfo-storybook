import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextareaAutosize from 'react-textarea-autosize';

import './Textarea.scss';

export default class Textarea extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    autosize: PropTypes.bool,
  }

  static defaultProps = {
    id: undefined,
    label: null,
    error: null,
    autosize: false,
  }

  render() {
    const {
      children: text,
      name,
      label,
      error,
      autosize,
      id,
      ...rest
    } = this.props;

    const textareaProps = {
      ...rest,
      id: id || `textarea-${name}`,
      name,
      'aria-invalid': !!error,
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

          {autosize
            ? <TextareaAutosize {...textareaProps}>{text}</TextareaAutosize>
            : <textarea {...textareaProps}>{text}</textarea>
          }

          {error && <span className="dfo-error-wrapper__error">{error}</span>}
        </div>
      </label>
    );
  }
}
