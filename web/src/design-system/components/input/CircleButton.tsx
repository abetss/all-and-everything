import React from 'react';
import { Button } from 'rebass/styled-components';
import { MarginProps } from 'styled-system';

interface CircleButtonProps extends MarginProps {
  size: 'small' | 'medium';
  disabled?: Boolean;
  onClick?: (this: void, e: Event) => void;
  children?: string;
  bg?: string;
}

const smallSize = {
  px: 2,
  pt: 0,
  pb: 1,
};

const mediumSize = {
  px: 3,
  py: '10px',
  pb: '12px',
};

const sizes = {
  small: smallSize,
  medium: mediumSize,
};

export const CircleButton = ({
  onClick,
  disabled,
  size,
  children,
  ...props
}: CircleButtonProps) => {
  const sizeProps = sizes[size];

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      {...sizeProps}
      {...props}
      sx={{
        ':hover': { cursor: 'pointer', opacity: '0.9' },
        borderRadius: 6,
      }}
    >
      {children}
    </Button>
  );
};
