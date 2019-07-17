export const findStringMatch = (input: string) => (item: any) => {
  return item.title.toLowerCase().search(input.toLowerCase()) !== -1;
};
