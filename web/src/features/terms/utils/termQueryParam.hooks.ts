import { useQueryParam, StringParam } from 'use-query-params';

export const useTermQueryParam = (): [
  string,
  (newValue: string, updateType?: 'replace' | 'replaceIn' | 'push' | 'pushIn') => void,
] => {
  const [termId, setTermId] = useQueryParam('id', StringParam);
  return [termId, setTermId];
};
