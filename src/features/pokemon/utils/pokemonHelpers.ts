import { POKEMON_CONSTANTS } from "../constants";
import { EXTERNAL_APIS } from "@/shared/services/apiConfig";
import { extractIdFromUrl, buildResourceUrl } from "@/shared/lib";

export const getPokemonImageUrlById = (
  id: number | string | null | undefined,
): string => {
  const parsedId = Number(id);

  if (!Number.isFinite(parsedId) || parsedId <= 0) {
    return POKEMON_CONSTANTS.PLACEHOLDER_IMAGE;
  }

  return buildResourceUrl(EXTERNAL_APIS.POKEMON_SPRITES, parsedId, '.png');
};

export const getPokemonIdFromUrl = (
  url: string | null | undefined,
): number | null => {
  return extractIdFromUrl(url, /\/pokemon\/(\d+)\/?$/);
};

