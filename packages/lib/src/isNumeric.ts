export const isNumeric = (value: unknown): boolean => {
  if (typeof value === 'number') return true;
  if (typeof value === 'string') return !isNaN(Number(value));
  return false;
};
