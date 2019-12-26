import React from 'react';
import { Button, Box } from 'rebass/styled-components';
import { PrimaryText } from '../typography/primary-text.component';
import { MarginProps, ColorProps } from 'styled-system';

export interface BadgeProps extends MarginProps, ColorProps {
  children: string | number;
  onClick?: (this: void, e: Event) => void;
}

export const Badge = ({ children, onClick, color = 'on-secondary', ...props }: BadgeProps) => {
  return (
    <Box
      onClick={onClick}
      {...props}
      sx={{
        display: 'inline-block',
        bg: 'secondary-variant',
        px: 2,
        py: 1,
        borderRadius: 9999,
        ':hover': { cursor: onClick ? 'pointer' : 'default' },
      }}
    >
      <PrimaryText color={color}>{children}</PrimaryText>
    </Box>
  );
};
