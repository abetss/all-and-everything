import { User } from '../../core/types';

export interface TermNote {
  id: number;
  title: string;
  author?: User;
}
