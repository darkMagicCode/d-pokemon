import { ListingPageContent } from "@/shared/components/templates";
import { usePagination } from "@/shared/hooks";
import { usePokemonList } from "../../api/queries";
import { usePokemonTransform } from "../../hooks/usePokemonTransform";

export const PaginationTab = () => {
  const pagination = usePagination({});

  const { data, isLoading, error, refetch } = usePokemonList(pagination);

  const pokemonData = usePokemonTransform(data?.results || []);

  return (
    <ListingPageContent
      items={pokemonData}
      isLoading={isLoading}
      loadingCount={pagination.itemsPerPage}
      pagination={{
        totalCount: data?.count || 0,
        currentPage: pagination.currentPage,
        totalPages: pagination.totalPages,
        onPageChange: pagination.handlePageChange,
      }}
      error={error}
      onRetry={refetch}
    />
  );
};
