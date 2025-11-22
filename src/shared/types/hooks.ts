export interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

export type SetValue<T> = T | ((val: T) => T);

export interface UsePaginationOptions {
  itemsPerPage?: number;
  scrollToTop?: boolean;
}

export interface UsePaginationReturn {
  currentPage: number;
  offset: number;
  itemsPerPage: number;
  totalPages: (totalCount: number) => number;
  handlePageChange: (page: number) => void;
}

export interface UseInfiniteScrollOptions {
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  pagesCount: number;
}

export interface UseInfiniteScrollReturn {
  shouldShowLoader: boolean;
}
