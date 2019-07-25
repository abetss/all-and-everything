import React from 'react';
import { Card } from 'rebass';

export const ListItem = ({ children, id, onClick, selected }: any) => {
  return (
    <Card
      variant="clickable"
      width={1}
      borderTop={1}
      borderColor="surface"
      p={3}
      bg={selected ? 'primary-light' : ''}
      color={selected ? 'on-primary' : ''}
      onClick={() => onClick(id)}
    >
      {children}
    </Card>
  );
};
