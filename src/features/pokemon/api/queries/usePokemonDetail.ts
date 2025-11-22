import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "../services";
import type { Pokemon } from "../../types";
import { pokemonKeys } from "../queryKeys";

export const usePokemonDetail = (id: string | undefined) => {
  return useQuery<Pokemon>({
    queryKey: id ? pokemonKeys.detail(id) : ['pokemon', 'detail', 'undefined'],
    queryFn: () => fetchPokemonDetail(id!),
    enabled: !!id,
  });
};
