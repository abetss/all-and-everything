import React from 'react';
import { Flex, Box, Text } from 'src/design-system';
import { TermNote } from './TermNote';

interface TermNotesProps {
  notes: any;
}

export const TermNotes = ({ notes }: TermNotesProps) => (
  <Flex sx={{ flexDirection: 'row' }}>
    {notes.length > 0 && (
      <Box mt={3}>
        <Text sx={{ fontSize: 3 }}>Notes: </Text>
        {notes.map((note: any, index: number) => (
          <TermNote key={`term-note-${index}`} note={note} />
        ))}
      </Box>
    )}
  </Flex>
);
