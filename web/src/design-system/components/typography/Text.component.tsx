import React from 'react';
import { Text as RebassText, TextProps } from 'rebass/styled-components';

export const Text = ({ children, ...props }: TextProps) => (
  <RebassText
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
  </RebassText>
);
