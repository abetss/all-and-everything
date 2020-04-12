import { termsMocksWithNotesPages } from '../../features/terms-notes/mocks';
import { Term } from '../../features/terms-notes';
import { models as lowDBModels } from './lowdb'

export const createStore = (isMock = true) => {
	const mockDatabaseStore = {
		terms: {
			findAll: (): Term[] => termsMocksWithNotesPages,
			findById: (id: number) => termsMocksWithNotesPages.find(x => x.id === id)
		},
	};

	return isMock ? lowDBModels : mockDatabaseStore;
};
