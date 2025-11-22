import { useInfiniteQueryResults } from "@/shared/hooks";
import type { usePokemonInfinite } from "../api/queries";
import type { PokemonListItem } from "../types";

export const usePokemonInfiniteResults = (
  data: ReturnType<typeof usePokemonInfinite>["data"],
): PokemonListItem[] => {
  return useInfiniteQueryResults(
    data?.pages,
    (page) => page.results,
  );
};

