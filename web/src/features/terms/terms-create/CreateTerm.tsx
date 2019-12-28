import React from 'react';
import { PagesInputGroup } from './components';
import { TextField, Button, Flex } from 'src/design-system';

export const CreateTerm = (props: any): any => {
  return (
    <Flex flexDirection="column">
      <Flex alignItems="center">
        <TextField
          label="Term"
          fullWidth={false}
          type="text"
          margin="none"
          value={props.term}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => props.onTermChange(event.target.value)}
        />
      </Flex>

      <PagesInputGroup
        addedPages={props.currentPages}
        onAddPageClicked={props.onAddPageClicked}
        onRemovePageClick={props.onRemovePageClick}
      />

      <Button onClick={props.onTermSubmitted} mt={5}>
        Create Term
      </Button>
    </Flex>
  );
};
