import React, { useState } from 'react';
import { Flex, Box, Card } from 'rebass/styled-components';
import { CreateTerm, CreatePage } from './components';
import { TextField } from '../../design-system';

export const CreateTermForm = (props: any) => {
  return (
    <Flex width={1} flexDirection="column">
      <Flex alignItems="center">
        <TextField
          label="Term"
          fullWidth={false}
          type="text"
          margin="none"
          value={props.term}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            props.onTermChange(event.target.value)
          }
        />
      </Flex>

      <CreatePage
        addedPages={props.currentPages}
        onAddPageClicked={props.onAddPageClicked}
        onRemovePageClick={props.onRemovePageClick}
      />
    </Flex>
  );
};
