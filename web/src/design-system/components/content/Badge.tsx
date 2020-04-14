import React from 'react';
import { Box, Text } from '../primitive';
import { MarginProps, ColorProps } from 'styled-system';

export interface BadgeProps extends MarginProps, ColorProps {
  children: string | number;
  onClick?: (e: any) => void;
  bg?: string;
}

export const Badge = ({
  children,
  onClick,
  bg = 'secondary-variant',
  color = 'on-secondary',
  ...props
}: BadgeProps) => {
  return (
    <Box
      onClick={onClick}
      {...props}
      sx={{
        display: 'inline-block',
        bg,
        px: 2,
        py: 1,
        borderRadius: 9999,
        ':hover': { cursor: onClick ? 'pointer' : 'default' },
      }}
    >
      <Text sx={{ color }}>{children}</Text>
    </Box>
  );
};
