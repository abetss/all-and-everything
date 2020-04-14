import React from 'react';
import { Flex, Box } from 'src/design-system';
import { TermDetailConnector } from './term-detail';
import { TermsListConnector } from './terms-list';
import { useTermQueryParam } from './utils';

export const TermsNotesPage = () => {
  const [termId] = useTermQueryParam();
  return (
    <Flex>
      <Box sx={{ bg: 'surface', minHeight: '100vh', maxWidth: '25%' }}>
        <TermsListConnector />
      </Box>
      <Box sx={{ width: '75%' }}>{termId && <TermDetailConnector id={termId} />}</Box>
    </Flex>
  );
};
