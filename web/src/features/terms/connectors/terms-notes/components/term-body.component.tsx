import React from 'react';
import { Card, Flex, Box, Text } from 'rebass';

interface TermBodyProps {
  term: any;
}

export const TermBody = ({ term }: TermBodyProps) => (
  <Flex flexDirection="column">
    {term.notes.length > 0 && (
      <Box mt={3}>
        <Text fontSize={3}>Notes: </Text>
        {term.notes.map((note: any) => (
          <Card p={3} my={2} border={1} borderColor="surface" key={note.text}>
            <Text fontSize={2}>{note.text}</Text>
          </Card>
        ))}
      </Box>
    )}
  </Flex>
);
