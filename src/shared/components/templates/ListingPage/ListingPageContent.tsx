import { ContentGrid, Pagination } from "@/shared/components/composites";
import { ErrorDisplay } from "@/shared/error";
import { usePaginationConfig, useErrorHandler } from "@/shared/hooks";
import type { ListingPageContentProps } from "@/shared/types";

export const ListingPageContent = ({
  items,
  isLoading = false,
  loadingCount = 12,
  pagination,
  error,
  onRetry,
  gridClassName,
  paginationClassName,
}: ListingPageContentProps) => {
  const { hasError } = useErrorHandler({ error, onRetry });
  const { config: paginationConfig, shouldShow: shouldShowPagination } =
    usePaginationConfig(pagination, isLoading);

  if (hasError) {
    return <ErrorDisplay onRetry={onRetry} />;
  }

  return (
    <>
      <ContentGrid
        items={items}
        isLoading={isLoading}
        loadingCount={loadingCount}
        className={gridClassName}
      />

      {shouldShowPagination && paginationConfig && (
        <Pagination
          currentPage={paginationConfig.currentPage}
          totalPages={paginationConfig.totalPages}
          onPageChange={paginationConfig.onPageChange}
          className={paginationClassName}
        />
      )}
    </>
  );
};

