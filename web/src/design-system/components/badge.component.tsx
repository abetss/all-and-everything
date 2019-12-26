import React from 'react';
import { Button } from 'rebass/styled-components';
import { PrimaryText } from './typography/primary-text.component';

type BadgeProps = {
  children: string | number;
  bg?: string;
  color?: string;
  onClick?: () => void;
};

export const Badge = ({ children, onClick, color = 'on-secondary', ...props }: BadgeProps) => {
  return (
    <Button
      variant={onClick ? 'clickable' : ''}
      ml={1}
      borderRadius={3}
      px={2}
      py={1}
      bg={'secondary-variant'}
      onClick={onClick}
      {...props}
    >
      <PrimaryText color={color}>{children}</PrimaryText>
    </Button>
  );
};
