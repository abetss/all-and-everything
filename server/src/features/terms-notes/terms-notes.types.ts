import { User } from '../../core/types';

export interface Term {
	id: number;
	title: string;
	author?: User;
}
