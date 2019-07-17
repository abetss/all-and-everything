import React from 'react';
import { Flex, Box } from 'rebass';
import { TermsNotesConnector } from './connectors/terms-notes';
import { TermsListWidget } from './connectors/terms-list';
import { useTermQueryParam } from './utils';

export const TermsNotesScene = () => {
  const [ termId ] = useTermQueryParam()
  return (
    <Flex>
      <Box width={1 / 4}>
        <TermsListWidget />
      </Box>
      <Box width={3 / 4}>
        { termId && <TermsNotesConnector id={termId} /> }
      </Box>
    </Flex>
  );
};
