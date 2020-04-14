import React from 'react';
import { Box, PageHeading } from 'src/design-system';
import { TermNotes } from './components/TermNotes';
import { TermTags } from './components/TermTags';
import { TermPages } from './components/TermPages';

interface TermDetailProps {
  term: any;
}

export const TermDetail = ({ term }: TermDetailProps) => (
  <Box p={3}>
    <PageHeading>{term.title}</PageHeading>
    {term.tags.length > 0 && <TermTags tags={term.tags} />}
    {term.pages.length > 0 && <TermPages pages={term.pages} />}
    <TermNotes notes={term.notes} />
  </Box>
);
