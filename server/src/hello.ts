import { myName } from './server/server';
import { APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent): Promise<any> => {
  return {
    statusCode: 200,
    body: `Hello world what ${myName}`
  };
};
