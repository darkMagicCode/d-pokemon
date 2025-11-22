import { ContentGrid, LoadMoreButton } from "@/shared/components/composites";
import { ErrorDisplay } from "@/shared/error";
import { Spinner } from "@/shared/loading";
import {
  useInfiniteScroll,
  useInfiniteScrollData,
  useErrorHandler,
} from "@/shared/hooks";
import type { InfiniteScrollContentProps } from "@/shared/types";
import { PAGINATION_CONSTANTS } from "@/shared/constants";

export const InfiniteScrollContent = ({
  items,
  isLoading = false,
  loadingCount = PAGINATION_CONSTANTS.DEFAULT_LIMIT,
  hasNextPage = false,
  isFetchingNextPage = false,
  onLoadMore,
  infiniteData,
  loadedCountText,
  loadingText = "Loading...",
  loadMoreText = "Load More",
  allLoadedText = "All items loaded",
  error = null,
  onRetry,
  gridClassName,
  buttonClassName,
}: InfiniteScrollContentProps) => {
  const { hasError } = useErrorHandler({ error, onRetry });

  const { loadedCount, pagesCount, totalCount } = useInfiniteScrollData({
    items,
    pages: infiniteData?.pages,
    loadingCount,
  });

  const { shouldShowLoader } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    pagesCount,
  });

  if (hasError) {
    return <ErrorDisplay onRetry={onRetry} />;
  }

  const handleManualLoad = () => {
    if (hasNextPage && !isFetchingNextPage) {
      onLoadMore();
    }
  };

  const canLoadMore = Boolean(hasNextPage);
  const isBusy = isFetchingNextPage;
  const isLoadingInitial = isLoading && items.length === 0;

  return (
    <>
      <ContentGrid
        items={items}
        isLoading={isLoadingInitial}
        loadingCount={loadingCount}
        className={gridClassName}
      />

      <LoadMoreButton
        canLoadMore={canLoadMore}
        isLoading={isBusy}
        onLoadMore={handleManualLoad}
        loadingText={loadingText}
        loadMoreText={loadMoreText}
        allLoadedText={allLoadedText}
        className={buttonClassName}
      />

      {shouldShowLoader && (
        <div className="py-2 flex justify-center">
          <Spinner />
        </div>
      )}

      {loadedCountText && typeof loadedCount === 'number' && typeof totalCount === 'number' && (
        <p className="text-center text-xs text-muted-foreground pb-4">
          {loadedCountText(loadedCount, totalCount)}
        </p>
      )}
    </>
  );
};

