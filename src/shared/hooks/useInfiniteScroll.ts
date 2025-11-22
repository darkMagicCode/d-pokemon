import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import type {
  UseInfiniteScrollOptions,
  UseInfiniteScrollReturn,
} from "../types";
import { updateSearchParams } from "../lib";

export const useInfiniteScroll = ({
  hasNextPage,
  isFetchingNextPage,
  pagesCount,
}: UseInfiniteScrollOptions): UseInfiniteScrollReturn => {
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams((prev) => {
      return updateSearchParams(prev, {
        cursor: 1,
        view: "infinite",
      });
    });
  }, [setSearchParams]);

  useEffect(() => {
    if (pagesCount === 0) return;
    setSearchParams((prev) => {
      return updateSearchParams(prev, {
        cursor: pagesCount,
        view: "infinite",
      });
    });
  }, [pagesCount, setSearchParams]);

  return {
    shouldShowLoader: hasNextPage && isFetchingNextPage,
  };
};

