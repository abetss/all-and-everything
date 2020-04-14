import React from 'react';
import { Flex } from '../primitive';

export interface PageProps {
  children: any;
}

export const Page = ({ children }: PageProps) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        minHeight: '100vh',
        '& > div': {
          flex: 1,
        },
      }}
    >
      {children}
    </Flex>
  );
};
