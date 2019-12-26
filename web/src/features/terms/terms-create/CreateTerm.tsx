import React from 'react';
import { Flex } from 'rebass/styled-components';
import { PagesInputGroup } from './components';
import { TextField } from '../../../design-system';

export const CreateTerm = (props: any) => {
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

      <PagesInputGroup
        addedPages={props.currentPages}
        onAddPageClicked={props.onAddPageClicked}
        onRemovePageClick={props.onRemovePageClick}
      />
    </Flex>
  );
};
