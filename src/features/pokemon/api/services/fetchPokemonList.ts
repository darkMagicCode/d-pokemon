import type { PokemonListResponse } from "../../types";
import { paths } from "../paths";
import { apiGet } from "@/shared/services/apiHelpers";
import { POKEMON_CONSTANTS } from "../../constants";

export const fetchPokemonList = async (
  limit: number = POKEMON_CONSTANTS.DEFAULT_LIMIT,
  offset: number = 0,
): Promise<PokemonListResponse> => {
  return apiGet<PokemonListResponse>(paths.pokemon.list, {
    params: { limit, offset },
  });
};
