import { DataSource } from 'apollo-datasource';
import { TermNote } from '../../features/terms-notes';

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

  // TODO: refactor this part to eliminate the need to call findAll for every model
  async getAllIndexTerms(): Promise<Index.Term[]> {
    const allTerms: Index.Term[] = await this.store.indexTerm.findAll();
    return allTerms;
  }

  async findIndexTerm(id: number): Promise<Index.Term> {
    const term: Index.Term = await this.store.indexTerm.findById(id);
    return term;
  }

  async getAllTerms(): Promise<TermNote[]> {
    const allTerms: TermNote[] = await this.store.terms.findAll();
    return allTerms;
  }

  async findTerm(id: number): Promise<TermNote> {
    const term: TermNote = await this.store.terms.findById(id);
    return term;
  }
}
