import React from 'react';
import { Heading } from 'rebass';

type PageHeadingProps = {
  title?: string;
};

export const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <Heading px={3} pt={3}>
      {title}
    </Heading>
  );
};
