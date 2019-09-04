import React from 'react';
import { Flex, Box, Card } from 'rebass';
import { CreateTerm, CreatePage } from './components';
import { PageHeading } from '../../../design-system/components/';

export const AddTerm = (props: any) => (
  <Box width={1}>
    <Flex alignItems="center" justifyContent="center">
      <PageHeading title={'Create new term'} />
    </Flex>
    <Flex alignItems="center" justifyContent="center">
      <CreateTerm flex-basis="33%" onAddTermClick={props.onAddTermClick} />
      <CreatePage
        flex-basis="33%"
        addedPages={props.currentPages}
        onAddClick={props.onAddClick}
        onRemoveClick={props.onRemoveClick}
      />
    </Flex>
  </Box>
);

// [2, 5 ,11]

// [0, 1, 2]
