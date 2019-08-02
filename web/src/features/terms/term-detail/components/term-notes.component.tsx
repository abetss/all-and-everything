import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { TermNote } from './term-note.component';

interface TermNotesProps {
  notes: any;
}

export const TermNotes = ({ notes }: TermNotesProps) => (
  <Flex flexDirection="column">
    {notes.length > 0 && (
      <Box mt={3}>
        <Text fontSize={3}>Notes: </Text>
        {notes.map((note: any) => (
          <TermNote note={note} />
        ))}
      </Box>
    )}
  </Flex>
);
