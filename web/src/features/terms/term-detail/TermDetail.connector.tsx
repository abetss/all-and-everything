import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import { TermDetail } from './TermDetail';
import { FindIndexTermVariables, FindIndexTerm } from './graphqlGenTypes/FindIndexTerm';

interface TermDetailConnectorProps {
  id?: string;
}

const FIND_TERM_QUERY = gql`
  query FindIndexTerm($id: ID) {
    indexTerm(id: $id) {
      id
      title
      indexGuide {
        editions {
          english1950 {
            title
            pronunciation {
              phonetic
              spelling
              sound
              lang
            }
            associations {
              type
              quotation
              terms {
                id
                title
              }
              pages {
                pageNumbers
                specialPages {
                  page
                  type
                }
              }
            }
          }
        }
        inOtherLangs {
          phonetic
          spelling
          sound
          lang
        }
      }
      dictionary {
        description
        subWords {
          word
          description
          lang
        }
        otherLangs {
          phonetic
          spelling
          sound
          lang
        }
      }
    }
  }
`;

export const TermDetailConnector = ({ id }: TermDetailConnectorProps) => {
  const { data, error, loading } = useQuery<FindIndexTerm, FindIndexTermVariables>(FIND_TERM_QUERY, {
    variables: { id },
  });

  console.log('data', JSON.stringify(data, null, 2));

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const { indexTerm } = data;

  return <TermDetail term={indexTerm} />;
};
