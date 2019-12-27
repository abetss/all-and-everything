import React from 'react';
import { Button as RebassButton } from 'rebass/styled-components';
import { MarginProps } from 'styled-system';

const smallSize = {
  width: 3,
  height: 1,
};

const mediumSize = {
  width: 4,
  height: 2,
};

const sizes = {
  small: smallSize,
  medium: mediumSize,
};

interface ButtonProps extends MarginProps {
  size?: 'small' | 'medium';
  disabled?: Boolean;
  onClick?: (this: void, e: Event) => void;
  children?: string;
  bg?: string;
}

export const Button = ({ onClick, disabled, size = 'medium', children, ...props }: ButtonProps) => {
  const sizeProps = sizes[size];

  return (
    <RebassButton
      display="block"
      p={0}
      bg="primary"
      color="on-primary"
      onClick={onClick}
      disabled={disabled}
      {...sizeProps}
      {...props}
      sx={{
        ':hover': { cursor: 'pointer', opacity: '0.9' },
        ':focus': { outline: 'none' },
        borderRadius: 2,
      }}
    >
      {children}
    </RebassButton>
  );
};
