import React from 'react';
import { Heading, Card, Flex, Box, Text } from 'rebass';
import { TermBody } from './components/term-body.component';

interface TermsNotesComponentProps {
  term: any;
}

export const TermsNotesComponent = ({ term }: TermsNotesComponentProps) => (
  <Box width={1} p={3}>
    <Heading>{term.title}</Heading>
    {term.tags.length > 0 && (
      <Flex mt={2}>
        {term.tags.map((tag: string) => (
          <Text mr={2}>#{tag}</Text>
        ))}
      </Flex>
    )}
    {term.pages.length > 0 && (
      <Flex mt={2}>
        <Text>Pages: </Text>
        {term.pages.map((page: number) => (
          <Text ml={2}>{page}</Text>
        ))}
      </Flex>
    )}
    <TermBody term={term} />
  </Box>
);
