import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  image?: string;
  className?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export const Button = ({
  children,
  disabled,
  type,
  image,
  className,
  style,
  onClick,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`Button ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={{ backgroundImage: `url(${image})`, ...style }}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'submit',
};

export default Button;
