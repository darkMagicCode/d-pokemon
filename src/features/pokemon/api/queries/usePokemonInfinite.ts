import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../services";
import type { PokemonListResponse } from "../../types";
import { POKEMON_CONSTANTS } from "../../constants";
import { pokemonKeys } from "../queryKeys";

export const usePokemonInfinite = (
  limit: number = POKEMON_CONSTANTS.DEFAULT_LIMIT,
) => {
  return useInfiniteQuery<PokemonListResponse>({
    queryKey: pokemonKeys.infinite(limit),
    queryFn: ({ pageParam = 0 }) =>
      fetchPokemonList(limit, pageParam as number),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      try {
        const url = new URL(lastPage.next);
        const offset = Number(url.searchParams.get("offset"));
        return Number.isFinite(offset) ? offset : undefined;
      } catch {
        return undefined;
      }
    },
    initialPageParam: 0,
  });
};
