import { useMemo } from "react";
import type { ListingPageContentProps } from "@/shared/types";

export interface PaginationConfig {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const usePaginationConfig = (
  pagination: ListingPageContentProps["pagination"],
  isLoading: boolean = false,
): { config: PaginationConfig | undefined; shouldShow: boolean } => {
  const config = useMemo(() => {
    if (!pagination?.totalCount) return undefined;

    const totalPages = pagination.totalPages(pagination.totalCount);
    if (totalPages <= 0) return undefined;

    return {
      currentPage: pagination.currentPage,
      totalPages,
      onPageChange: pagination.onPageChange,
    };
  }, [pagination]);

  const shouldShow = Boolean(config && !isLoading);

  return { config, shouldShow };
};

