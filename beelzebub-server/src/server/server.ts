import { ApolloServer, Config } from 'apollo-server';

import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { typeDefs } from './typedefs';
import { schemaLogger } from './utils';

export const startServer = () => {
	const schema = makeExecutableSchema({
		typeDefs,
		resolvers,
		logger: schemaLogger
	});

	const server = new ApolloServer({ schema });

	server.listen().then(({ url }) => {
		console.log(`🚀  Server ready at ${url}`);
	});
};
