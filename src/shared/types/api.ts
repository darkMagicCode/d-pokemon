export interface PaginatedListResponse<TItem> {
  count: number;
  next: string | null;
  previous: string | null;
  results: TItem[];
}

export interface NamedResource {
  name: string;
  url: string;
}

export interface ApiErrorResponse {
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
  statusCode?: number;
  [key: string]: unknown;
}

export interface PaginationParams {
  limit?: number;
  offset?: number;
  page?: number;
  pageSize?: number;
}

export interface InfiniteQueryParams {
  limit?: number;
  offset?: number;
  cursor?: string | number;
}

