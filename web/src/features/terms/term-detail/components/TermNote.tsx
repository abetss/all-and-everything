import React from 'react';
import { Text, Card } from 'src/design-system';

interface TermNoteProps {
  note: any;
}

export const TermNote = ({ note }: TermNoteProps) => (
  <Card p={3} my={2} sx={{ border: 1, borderColor: 'surface' }}>
    <Text>{note.text}</Text>
  </Card>
);
