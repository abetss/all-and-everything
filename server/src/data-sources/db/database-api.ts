import { DataSource } from 'apollo-datasource';
import { Term } from '../../features/terms-notes';

interface IModel {
	terms: {
		findAll: Term[],

	}
}

export class DatabaseAPI extends DataSource {
	private store: any;
	private context: any;

	constructor({ store }: any) {
		super();
		this.store = store;
	}

	/**
	 * This is a function that gets called by ApolloServer when being setup.
	 * This function gets called with the datasource config including things
	 * like caches and context. We'll assign this.context to the request context
	 * here, so we can know about the user making requests
	 */
	initialize(config: any) {
		this.context = config.context;
	}

	async getAllTerms(): Promise<Term[]> {
		const allTerms: Term[] = await this.store.terms.findAll();
		return allTerms;
	}

	async findTerm(id: number): Promise<Term> {
		const term: Term = await this.store.terms.findById(id);
		return term;
	}
}
