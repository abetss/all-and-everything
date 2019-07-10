import { termsMocksWithNotesPages } from '../../features/terms-notes/mocks';
import { Term } from '../../features/terms-notes';

export const createStore = (isMock = false) => {
	const mockDatabaseStore = {
		terms: {
			findAll: (): Term[] => termsMocksWithNotesPages
		}
	};

	return mockDatabaseStore;
};
