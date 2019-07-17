import React from 'react';
import { Heading, Card, Flex, Box, Text } from 'rebass';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

interface TermsNotesConnectorProps {
  id?: any
}

const FIND_TERM_QUERY = gql`
  query term($id: Int) {
    term(id: $id) {
      title,
      notes {
        text
      }
      pages
      tags
    }
  }
`;

export const TermsNotesConnector = ({ id }: TermsNotesConnectorProps ) => {
  console.log('id', id)
  const { data, error, loading } = useQuery(FIND_TERM_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const {
    term,
  } = data;

  return (
    <Box width={1} p={3}>
       <Heading>{term.title}</Heading>
        { term.tags.length > 0 &&
          <Flex mt={2} >
            {
              term.tags.map((tag: string) => <Text mr={2}>#{tag}</Text>)
            }
          </Flex>
       }
       { term.pages.length > 0 &&
          <Flex mt={2}>
            <Text>Pages: </Text>
            {
              term.pages.map((page: number) => <Text ml={2}>{page}</Text>)
            }
          </Flex>
       }
       { term.notes.length > 0 &&
          <Box mt={3}>
            <Text>Notes: </Text>
            {
              term.notes.map((note: any) =>
                <Card p={3} my={2} border={1} borderColor="surface">
                  <Text>
                    {note.text}
                  </Text>
                </Card>)
            }
          </Box>
       }
    </Box>
  );
};
