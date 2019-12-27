import React from 'react';
import { Box } from 'rebass/styled-components';
import { TermNotes } from './components/TermNotes';
import { TermTags } from './components/TermTags';
import { TermPages } from './components/TermPages';
import { PageHeading } from '../../../design-system';

interface TermDetailProps {
  term: any;
}

export const TermDetail = ({ term }: TermDetailProps) => (
  <Box width="100%" p={3}>
    <PageHeading>{term.title}</PageHeading>
    {term.tags.length > 0 && <TermTags tags={term.tags} />}
    {term.pages.length > 0 && <TermPages pages={term.pages} />}
    <TermNotes notes={term.notes} />
  </Box>
);
