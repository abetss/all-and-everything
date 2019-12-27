import { createServer } from './server';
// startServer();

const server = createServer();

exports.handler = server.createHandler();
