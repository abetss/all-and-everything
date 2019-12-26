import React from 'react';
import { Card } from 'rebass/styled-components';
import { Text } from '../../../../design-system';

interface TermNoteProps {
  note: any;
}

export const TermNote = ({ note }: TermNoteProps) => (
  <Card p={3} my={2} border={1} borderColor="surface">
    <Text>{note.text}</Text>
  </Card>
);
