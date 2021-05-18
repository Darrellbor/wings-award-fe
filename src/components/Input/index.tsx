/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import Label from '../Label';
import Password from 'components/Icons/Input/Password';
import InputSuccess from 'components/Icons/Input/InputSucess';
import InputCancel from 'components/Icons/Input/InputCancel';

interface InputProps {
  attributes: {
    [key: string]: any;
  };
  hasError: boolean;
  focused: boolean;
  label?: string;
  message?: string;
  messageClassName?: string;
  appendItem?: any;
  prependItem?: any;
  handleAppendItemClick?: () => void;
  isPasswordVisible?: boolean;
}

const Input = (props: InputProps): JSX.Element => {
  let appendedItem,
    inputClassName = 'input';
  const messageClassName = props.messageClassName
    ? props.messageClassName + ' input__message'
    : 'input__message';

  props.hasError &&
    props.attributes.value !== '' &&
    !props.focused &&
    (inputClassName += ' input--invalid');
  props.focused && (inputClassName += ' input--focus');

  switch (props.appendItem) {
    case 'password':
      appendedItem = (
        <div className="input__icon" onClick={props.handleAppendItemClick}>
          {props.isPasswordVisible ? <Password type="close" /> : <Password />}
        </div>
      );
      break;
    case 'success':
      appendedItem = (
        <div className="input__icon">
          <InputSuccess />
        </div>
      );
      break;
    case 'cancel':
      appendedItem = (
        <div className="input__icon" onClick={props.handleAppendItemClick}>
          <InputCancel />
        </div>
      );
      break;
    default:
      props.appendItem &&
        (appendedItem = (
          <div className="input__icon" onClick={props.handleAppendItemClick}>
            {props.appendItem}
          </div>
        ));
  }
  return (
    <div
      className={
        props.attributes.theme
          ? `input__group input__theme--${props.attributes.theme}`
          : 'input__group'
      }>
      {props.label && (
        <Label>
          {props.label}
          {props.attributes.required && ' *'}
        </Label>
      )}
      <div className={inputClassName}>
        {props.prependItem && <div className="input__prepend">{props.prependItem}</div>}
        <input className="input__item" {...props.attributes} />
        {props.appendItem && <div className="input__append">{appendedItem}</div>}
      </div>
      {props.message && <small className={messageClassName}>{props.message}</small>}
    </div>
  );
};

Input.defaultProps = {
  attributes: {
    required: false,
    value: '',
    theme: 'default',
    onChange: () => null,
    onFocus: () => null,
    onBlur: () => null,
  },
  appendedItem: null,
  handleAppendItemClick: () => null,
};

export default Input;
