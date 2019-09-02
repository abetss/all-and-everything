import React from 'react';
import { Flex, Box, Card } from 'rebass';
import { CreateTerm, CreatePage } from './components';
import { PageHeading } from '../../../design-system/components/';

export const AddTerm = (props: any) => (
  <Box width={1}>
    <Flex alignItems="center" justifyContent="center">
      <PageHeading title={'Create new term'} />
    </Flex>
    <Card>
      <CreateTerm />
      <CreatePage
        addedPages={props.currentPages}
        onAddClick={props.onAddClick}
        onRemoveClick={props.onRemoveClick}
      />
    </Card>
  </Box>
);

// [2, 5 ,11]

// [0, 1, 2]
