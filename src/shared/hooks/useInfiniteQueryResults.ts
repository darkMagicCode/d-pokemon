import { useMemo } from "react";

export const useInfiniteQueryResults = <TPage, TResult>(
  pages: TPage[] | undefined,
  getResults: (page: TPage) => TResult[],
): TResult[] => {
  return useMemo(() => {
    if (!pages) return [];
    return pages.flatMap(getResults);
  }, [pages, getResults]);
};

