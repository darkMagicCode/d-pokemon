import { useMemo } from "react";

export interface InfiniteScrollDataConfig<TItem, TPage> {
  items: TItem[];
  pages?: TPage[];
  loadingCount?: number;
  getTotalCount?: (firstPage: TPage) => number;
}

export interface InfiniteScrollDataResult {
  loadedCount: number;
  pagesCount: number;
  totalCount: number;
}

export const useInfiniteScrollData = <TItem, TPage = { count?: number }>({
  items,
  pages,
  loadingCount = 20,
  getTotalCount = (page: TPage) => (page as { count?: number })?.count ?? 0,
}: InfiniteScrollDataConfig<TItem, TPage>): InfiniteScrollDataResult => {
  const loadedCount = useMemo(() => items.length, [items.length]);

  const pagesCount = useMemo(
    () => pages?.length ?? Math.ceil(items.length / loadingCount),
    [pages?.length, items.length, loadingCount],
  );

  const totalCount = useMemo(() => {
    if (!pages || pages.length === 0) return 0;
    return getTotalCount(pages[0]);
  }, [pages, getTotalCount]);

  return {
    loadedCount,
    pagesCount,
    totalCount,
  };
};

