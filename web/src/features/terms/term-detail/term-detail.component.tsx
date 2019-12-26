import React from 'react';
import { Box } from 'rebass/styled-components';
import { TermNotes } from './components/term-notes.component';
import { TermTags } from './components/term-tags.component';
import { TermPages } from './components/term-pages.component';
import { PageHeading } from '../../../design-system';

interface TermDetailProps {
  term: any;
}

export const TermDetail = ({ term }: TermDetailProps) => (
  <Box width={1} p={3}>
    <PageHeading>{term.title}</PageHeading>
    {term.tags.length > 0 && <TermTags tags={term.tags} />}
    {term.pages.length > 0 && <TermPages pages={term.pages} />}
    <TermNotes notes={term.notes} />
  </Box>
);
