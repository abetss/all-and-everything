import React from 'react';
import { Flex, Box } from 'rebass/styled-components';
import { TermDetailConnector } from './term-detail';
import { TermsListConnector } from './terms-list';
import { useTermQueryParam } from './utils';

export const TermsNotesPage = () => {
  const [termId] = useTermQueryParam();
  return (
    <Flex>
      <Box width={1 / 4}>
        <TermsListConnector />
      </Box>
      <Box width={3 / 4}>{termId && <TermDetailConnector id={termId} />}</Box>
    </Flex>
  );
};
