import React from 'react';
import { Flex, Box } from 'rebass';
import { TermsNotesWidget } from './terms-notes/';
import { TermsListWidget } from './terms-list';
import { useTermQueryParam } from '../utils';

export const TermsNotesScene = () => {
  const [ termId ] = useTermQueryParam()
  return (
    <Flex>
      <Box width={1 / 4}>
        <TermsListWidget />
      </Box>
      <Box width={3 / 4}>
        <TermsNotesWidget id={termId} />
      </Box>
    </Flex>
  );
};
