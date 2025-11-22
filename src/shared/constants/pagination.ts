export const PAGINATION_LABELS = {
  previousPage: "Previous page",
  nextPage: "Next page",
  page: (pageNumber: number) => `Page ${pageNumber}`,
  ellipsis: "...",
} as const;

export const PAGINATION_CONSTANTS = {
  DEFAULT_LIMIT: 12,
} as const;