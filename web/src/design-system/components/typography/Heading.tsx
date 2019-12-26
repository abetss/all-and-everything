import React from 'react';
import { Heading } from 'rebass/styled-components';
import { MarginProps } from 'styled-system';

interface PageHeadingProps extends MarginProps {
  children?: string;
}

export const PageHeading = ({ children }: PageHeadingProps) => {
  return (
    <Heading pt={3} mb={2} fontSize={6} color="primary">
      {children}
    </Heading>
  );
};

export const SidePageHeading = ({ children, ...props }: PageHeadingProps) => {
  return (
    <Heading pt={3} fontSize={4} color="primary" {...props} mb={1}>
      {children}
    </Heading>
  );
};
