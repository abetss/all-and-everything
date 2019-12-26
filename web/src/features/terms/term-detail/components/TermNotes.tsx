import React from 'react';
import { Flex, Box, Text } from 'rebass/styled-components';
import { TermNote } from './TermNote';

interface TermNotesProps {
  notes: any;
}

export const TermNotes = ({ notes }: TermNotesProps) => (
  <Flex flexDirection="column">
    {notes.length > 0 && (
      <Box mt={3}>
        <Text fontSize={3}>Notes: </Text>
        {notes.map((note: any, index: number) => (
          <TermNote key={`term-note-${index}`} note={note} />
        ))}
      </Box>
    )}
  </Flex>
);
