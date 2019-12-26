import React from 'react';
import { Heading } from 'rebass/styled-components';

type PageHeadingProps = {
  children?: string;
};

export const PageHeading = ({ children }: PageHeadingProps) => {
  return (
    <Heading pt={3} mb={2} fontSize={6} color="primary">
      {children}
    </Heading>
  );
};

export const SidePageHeading = ({ children }: PageHeadingProps) => {
  return (
    <Heading pt={3} mb={1} fontSize={4} color="primary">
      {children}
    </Heading>
  );
};
