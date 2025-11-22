export const VIEW_TYPES = {
  PAGINATION: 'pagination',
  INFINITE: 'infinite',
} as const;

export type ViewType = typeof VIEW_TYPES[keyof typeof VIEW_TYPES];

export const isValidViewType = (value: string): value is ViewType => {
  return Object.values(VIEW_TYPES).includes(value as ViewType);
};

export const getValidViewType = (
  value: string | null | undefined,
  fallback: ViewType = VIEW_TYPES.PAGINATION,
): ViewType => {
  if (value && isValidViewType(value)) {
    return value;
  }
  return fallback;
};

