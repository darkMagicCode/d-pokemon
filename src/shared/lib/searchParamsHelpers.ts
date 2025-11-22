export const updateSearchParams = (
  params: URLSearchParams,
  updates: Record<string, string | number>,
): URLSearchParams => {
  const next = new URLSearchParams(params);
  Object.entries(updates).forEach(([key, value]) => {
    next.set(key, String(value));
  });
  return next;
};

export const removeSearchParams = (
  params: URLSearchParams,
  keys: string[],
): URLSearchParams => {
  const next = new URLSearchParams(params);
  keys.forEach((key) => next.delete(key));
  return next;
};

export const getNumericParam = (
  params: URLSearchParams,
  key: string,
  fallback: number = 0,
  min?: number,
): number => {
  const value = params.get(key);
  const parsed = parseInt(value || String(fallback), 10);
  const result = isNaN(parsed) ? fallback : parsed;
  return min !== undefined ? Math.max(min, result) : result;
};

