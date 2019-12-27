import { createServer } from './server';

const server = createServer();
exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});
