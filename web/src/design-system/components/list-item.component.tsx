import React from 'react';
import { Card } from 'rebass';

export const ListItem = ({ children, id, onClick, selected }: any) => {
  return (
    <Card
      variant="clickable"
      width={1}
      height="40px"
      borderTop={1}
      borderColor="surface"
      p={3}
      bg={selected ? 'surface' : ''}
      onClick={() => onClick(id)}
    >
      {children}
    </Card>
  );
};
