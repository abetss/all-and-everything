import { ApolloServer } from 'apollo-server';

import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';
import { schemaLogger } from './utils';
import { createStore, DatabaseAPI } from '../data-sources/db';

export const startServer = () => {
	const store = createStore();

	// set up any dataSources our resolvers need
	const dataSources = () => ({
		databaseApi: new DatabaseAPI({ store })
	});

	const schema = makeExecutableSchema({
		typeDefs,
		resolvers,
		logger: schemaLogger
	});

	const server = new ApolloServer({
		schema,
		dataSources
	});

	server.listen().then(({ url }) => {
		console.log(`🚀  Server ready at ${url}`);
	});
};
