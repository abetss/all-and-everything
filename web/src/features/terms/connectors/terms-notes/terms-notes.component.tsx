import React from 'react';
import { Heading, Card, Flex, Box, Text } from 'rebass';
import { TermBody } from './components/term-body.component';
import { TermTags } from './components/term-tags.component';
import { TermPages } from './components/term-pages.component';

interface TermsNotesComponentProps {
  term: any;
}

export const TermsNotesComponent = ({ term }: TermsNotesComponentProps) => (
  <Box width={1} p={3}>
    <Heading fontSize={6} color="primary">
      {term.title}
    </Heading>
    {term.tags.length > 0 && <TermTags term={term} />}
    {term.pages.length > 0 && <TermPages term={term} />}
    <TermBody term={term} />
  </Box>
);
