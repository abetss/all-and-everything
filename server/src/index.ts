import { createServer } from './server';
import { helloPT } from './data-sources/db/ptClient';

const server = createServer();
exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});

exports.handlerPT = helloPT;
