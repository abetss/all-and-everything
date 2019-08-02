import React from 'react';
import { Card } from 'rebass';
import { PrimaryText } from '../../../../design-system';

interface TermNoteProps {
  note: any;
}

export const TermNote = ({ note }: TermNoteProps) => (
  <Card p={3} my={2} border={1} borderColor="surface">
    <PrimaryText>{note.text}</PrimaryText>
  </Card>
);
