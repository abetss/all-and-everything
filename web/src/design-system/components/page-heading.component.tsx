import React from 'react';
import { Heading } from 'rebass';

type PageHeadingProps = {
  heading?: string;
};

export const PageHeading = ({ heading }: PageHeadingProps) => {
  return (
    <Heading px={3} pt={3}>
      {heading}
    </Heading>
  );
};
