/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React from 'react';
import { Box, PageHeading, Text } from 'src/design-system';
import { TermNotes } from './components/TermNotes';
import { TermTags } from './components/TermTags';
import { TermPages } from './components/TermPages';
import { FindIndexTerm_indexTerm } from './graphqlGenTypes/FindIndexTerm';

interface TermDetailProps {
  term: FindIndexTerm_indexTerm;
}

const edition = 'english1992'; // TODO: get this from context

export const TermDetail = ({ term }: TermDetailProps) => {
  const index = term.indexGuide.editions.english1950;

  return (
    <Box p={3}>
      <PageHeading>{index.title}</PageHeading>

      {index.pronunciation && index.pronunciation.phonetic && (
        <Text variant="secondary">{index.pronunciation.phonetic}</Text>
      )}

      <ul sx={{ pl: '22px' }}>
        {index.associations
          .filter(association => association.type === 'reference')
          .map((association, i) => (
            <li sx={{ mb: 2 }} key={`${index.title}-assoc-${i}`}>
              <Text>
                {association.quotation}
                <Text sx={{ ml: 1, display: 'inline', color: 'secondary.dark' }}>
                  {association.pages.pageNumbers
                    .map(
                      (pageNumber, index) =>
                        `${pageNumber}${index !== association.pages.pageNumbers.length - 1 ? ', ' : ''}`,
                    )
                    .join('')}
                </Text>
              </Text>
            </li>
          ))}
        {index.associations
          .filter(association => association.type === 'see-also')
          .map((association, i) => (
            <li sx={{ mb: 2 }} key={`${index.title}-assoc-${i}`}>
              <Text>
                {association.quotation}
                <Text sx={{ ml: 1, display: 'inline', color: 'secondary.dark' }}>
                  {association.pages.pageNumbers
                    .map(
                      (pageNumber, index) =>
                        `${pageNumber}${index !== association.pages.pageNumbers.length - 1 ? ', ' : ''}`,
                    )
                    .join('')}
                </Text>
              </Text>
            </li>
          ))}
      </ul>

      {/* {term.tags.length > 0 && <TermTags tags={term.tags} />}
  {term.pages.length > 0 && <TermPages pages={term.pages} />} */}
      {/* <TermNotes notes={term.notes} /> */}
    </Box>
  );
};
