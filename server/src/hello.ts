import { APIGatewayEvent } from 'aws-lambda';
import { name } from './server/server';

export const handler = async (event: APIGatewayEvent): Promise<any> => {
  return {
    statusCode: 200,
    body: `Hello ${name} world what`
  };
};
