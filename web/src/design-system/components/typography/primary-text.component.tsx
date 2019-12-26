import React from 'react';
import { Text, TextProps } from 'rebass/styled-components';

export const PrimaryText = ({ children, ...props }: TextProps) => (
  <Text
    color="on-surface"
    textAlign="left"
    {...props}
    fontSize={2}
    fontWeight={3}
    fontFamily="regular"
    lineHeight="solid"
    letterSpacing="normal"
  >
    {children}
  </Text>
);
