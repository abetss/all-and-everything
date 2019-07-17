import { useQueryParam, NumberParam } from 'use-query-params';

export const useTermQueryParam = () => {
  const [termId, setTermId] = useQueryParam('id', NumberParam);
  return [termId, setTermId];
};
