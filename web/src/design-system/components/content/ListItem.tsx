import React from 'react';
import { Box } from 'src/design-system';

export const ListItem = ({ children, id, onClick, selected }: any) => {
  return (
    <Box
      sx={{
        borderTop: 1,
        borderColor: 'primary-variant',
        ':hover': { cursor: 'pointer' },
        bg: selected ? 'primary-variant' : '',
        color: selected ? 'background' : 'on-background',
      }}
      p={3}
      onClick={() => onClick(id)}
    >
      {children}
    </Box>
  );
};
