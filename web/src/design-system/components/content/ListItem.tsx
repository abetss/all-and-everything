import React from 'react';
import { Box } from 'src/design-system';

export const ListItem = ({ children, id, onClick, selected, withBorderTop }: any) => {
  return (
    <Box
      sx={{
        borderTop: withBorderTop? 1 : 0,
        borderColor: 'primary.light',
        ':hover': { cursor: 'pointer' },
        bg: selected ? 'primary.main' : '',
        color: selected ? 'primary.contrast' : 'text.primary',
      }}
      p={3}
      onClick={() => onClick(id)}
    >
      {children}
    </Box>
  );
};
