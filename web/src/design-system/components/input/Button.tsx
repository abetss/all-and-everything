/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Button as ThemeUIButton } from '../primitive';
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
  disabled?: boolean;
  onClick?: (e: any) => void;
  children?: string;
}

export const Button = ({ onClick, disabled, size = 'medium', children, ...props }: ButtonProps) => {
  const sizeProps = sizes[size];

  return (
    <ThemeUIButton
      p={0}
      onClick={onClick}
      disabled={disabled}
      {...sizeProps}
      {...props}
      sx={{
        borderRadius: 2,
      }}
    >
      {children}
    </ThemeUIButton>
  );
};
