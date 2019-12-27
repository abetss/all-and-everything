import React from 'react';
import { Card } from 'rebass/styled-components';

export const ListItem = ({ children, id, onClick, selected }: any) => {
  return (
    <Card
      borderTop={1}
      borderColor="surface"
      p={3}
      bg={selected ? 'primary-variant' : ''}
      color={selected ? 'on-primary' : 'on-surface'}
      onClick={() => onClick(id)}
      sx={{
        ':hover': { cursor: 'pointer' },
      }}
    >
      {children}
    </Card>
  );
};
