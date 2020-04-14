import React from 'react';
import { PagesInputGroup } from './components';
import { TextField, Button, Flex } from 'src/design-system';

export const CreateTerm = (props: any): any => {
  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Flex sx={{ flexDirection: 'row', alignItems: 'baseline' }}>
        <TextField
          label="Term"
          fullWidth={false}
          type="text"
          margin="none"
          value={props.term}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => props.onTermChange(event.target.value)}
        />
        <PagesInputGroup
          addedPages={props.currentPages}
          onAddPageClicked={props.onAddPageClicked}
          onRemovePageClick={props.onRemovePageClick}
        />
      </Flex>

      <Button sx={{ width: 4 }} onClick={props.onTermSubmitted} mt={5}>
        Create Term
      </Button>
    </Flex>
  );
};
