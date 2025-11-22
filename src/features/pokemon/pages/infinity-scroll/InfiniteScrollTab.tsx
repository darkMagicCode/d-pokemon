import { InfiniteScrollContent } from "@/shared/components/templates";
import { usePokemonInfinite } from "../../api/queries";
import { usePokemonTransform } from "../../hooks/usePokemonTransform";
import { usePokemonInfiniteResults } from "../../hooks/usePokemonInfiniteResults";
import { PAGES_TEXT } from "../../constants";

export const InfiniteScrollTab = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = usePokemonInfinite();

  const allResults = usePokemonInfiniteResults(data);
  const allPokemon = usePokemonTransform(allResults);

  const textLabels = {
    loadedCountText: PAGES_TEXT.infiniteScroll.loadedCount,
    loadingText: PAGES_TEXT.infiniteScroll.loading,
    loadMoreText: PAGES_TEXT.infiniteScroll.loadMore,
    allLoadedText: PAGES_TEXT.infiniteScroll.allLoaded,
  };

  return (
    <InfiniteScrollContent
      items={allPokemon}
      isLoading={isLoading}
      hasNextPage={hasNextPage ?? false}
      isFetchingNextPage={isFetchingNextPage}
      onLoadMore={fetchNextPage}
      infiniteData={data}
      error={error}
      onRetry={refetch}
      {...textLabels}
    />
  );
};
