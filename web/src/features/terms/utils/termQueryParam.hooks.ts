import { useQueryParam, NumberParam } from 'use-query-params';

export const useTermQueryParam = (): [
  number,
  (newValue: number, updateType?: 'replace' | 'replaceIn' | 'push' | 'pushIn') => void,
] => {
  const [termId, setTermId] = useQueryParam('id', NumberParam);
  return [termId, setTermId];
};
