import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../services";
import type { PokemonListResponse } from "../../types";
import { POKEMON_CONSTANTS } from "../../constants";
import type { UsePaginationReturn } from "@/shared/types";
import { pokemonKeys } from "../queryKeys";

export const usePokemonList = (
  pagination?: UsePaginationReturn,
  limit?: number,
  offset?: number,
) => {
  const finalLimit = pagination?.itemsPerPage ?? limit ?? POKEMON_CONSTANTS.DEFAULT_LIMIT;
  const finalOffset = pagination?.offset ?? offset ?? 0;

  return useQuery<PokemonListResponse>({
    queryKey: pokemonKeys.list(finalLimit, finalOffset),
    queryFn: () => fetchPokemonList(finalLimit, finalOffset),
  });
};
