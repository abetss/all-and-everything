import React from 'react';
import { Heading, Box } from 'rebass';
import { TermNotes } from './components/term-notes.component';
import { TermTags } from './components/term-tags.component';
import { TermPages } from './components/term-pages.component';

interface TermDetailProps {
  term: any;
}

export const TermDetail = ({ term }: TermDetailProps) => (
  <Box width={1} p={3}>
    <Heading fontSize={6} color="primary">
      {term.title}
    </Heading>
    {term.tags.length > 0 && <TermTags tags={term.tags} />}
    {term.pages.length > 0 && <TermPages pages={term.pages} />}
    <TermNotes notes={term.notes} />
  </Box>
);
