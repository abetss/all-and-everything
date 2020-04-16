import React from 'react';
import { Box } from 'src/design-system';

export const ListItem = ({ children, id, onClick, selected, withBorderTop }: any) => {
  return (
    <Box
      sx={{
        borderTop: withBorderTop ? 1 : 0,
        borderColor: 'secondary.light',
        ':hover': { cursor: 'pointer' },
        bg: selected ? 'secondary.main' : '',
        color: selected ? 'secondary.contrast' : 'text.primary',
      }}
      p={3}
      onClick={() => onClick(id)}
    >
      {children}
    </Box>
  );
};
