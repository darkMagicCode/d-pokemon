import type { Pokemon } from "../../types";
import { paths } from "../paths";
import { apiGet } from "@/shared/services/apiHelpers";

export const fetchPokemonDetail = async (id: string): Promise<Pokemon> => {
  return apiGet<Pokemon>(paths.pokemon.detail(id));
};
