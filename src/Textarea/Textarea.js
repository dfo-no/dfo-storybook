import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AutosizeTextarea from 'react-textarea-autosize';

import './Textarea.scss';
import TextareaAutosize from 'react-textarea-autosize';

export default class Textarea extends PureComponent {
  static propTypes = {
    children: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    error: PropTypes.string,
    autosize: PropTypes.bool,
  }

  static defaultProps = {
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
      ...rest
    } = this.props;

    const textareaProps = {
      ...rest,
      id: `textarea-${name}`,
      name,
    };

    return (
      <label
        htmlFor={textareaProps.id}
        className={classnames('dfo-textarea', { 'dfo-textarea--is-error': error })}
      >
        <div className="dfo-error-wrapper">
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
