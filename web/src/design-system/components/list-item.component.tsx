import React from 'react';
import { Card } from 'rebass/styled-components';

export const ListItem = ({ children, id, onClick, selected }: any) => {
  return (
    <Card
      variant="clickable"
      width={1}
      borderTop={1}
      borderColor="surface"
      p={3}
      bg={selected ? 'primary-light' : ''}
      color={selected ? 'on-surface' : ''}
      onClick={() => onClick(id)}
    >
      {children}
    </Card>
  );
};
