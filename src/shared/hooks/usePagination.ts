import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { UsePaginationOptions, UsePaginationReturn } from "../types";
import { PAGINATION_CONSTANTS } from "../constants";
import { getNumericParam, updateSearchParams, calculateTotalPages } from "../lib";

export const usePagination = ({
  itemsPerPage = PAGINATION_CONSTANTS.DEFAULT_LIMIT,
  scrollToTop = true,
}: UsePaginationOptions = {}): UsePaginationReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = useMemo(() => {
    return getNumericParam(searchParams, "page", 1, 1);
  }, [searchParams]);

  const offset = useMemo(() => {
    return (currentPage - 1) * itemsPerPage;
  }, [currentPage, itemsPerPage]);

  const totalPages = (totalCount: number): number => {
    return calculateTotalPages(totalCount, itemsPerPage);
  };

  const handlePageChange = (page: number) => {
    const validPage = Math.max(1, page);

    setSearchParams((prev) => {
      return updateSearchParams(prev, {
        page: validPage,
        view: "pagination",
      });
    });

    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    currentPage,
    offset,
    itemsPerPage,
    totalPages,
    handlePageChange,
  };
};

