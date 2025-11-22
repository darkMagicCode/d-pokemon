import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import type { ContentCardProps } from "@/shared/types";
import type { PokemonListItem } from "../types";
import { getPokemonIdFromUrl, getPokemonImageUrlById } from "../utils";
import { POKEMON_CONSTANTS, COMPONENTS_TEXT } from "../constants";
import { transformToCards, createIdMetadataFormatter } from "@/shared/lib";

export const usePokemonTransform = (
  results: PokemonListItem[],
): ContentCardProps[] => {
  const navigate = useNavigate();
  
  return useMemo<ContentCardProps[]>(() => {
    const metadataFormatter = createIdMetadataFormatter(COMPONENTS_TEXT.pokemonCard.idPrefix, 3);

    return transformToCards(results, {
      getId: (item) => getPokemonIdFromUrl(item.url),
      getTitle: (item) => item.name,
      getImage: (item) => {
        const id = getPokemonIdFromUrl(item.url);
        return id ? getPokemonImageUrlById(id) : POKEMON_CONSTANTS.PLACEHOLDER_IMAGE;
      },
      getMetadata: (item) => {
        const id = getPokemonIdFromUrl(item.url);
        return id ? metadataFormatter(id) : undefined;
      },
      getAriaLabel: (item) => COMPONENTS_TEXT.pokemonCard.viewDetails(item.name),
      onClick: (_item, id) => navigate(POKEMON_CONSTANTS.ROUTES.detail(id)),
      placeholderImage: POKEMON_CONSTANTS.PLACEHOLDER_IMAGE,
    });
  }, [results, navigate]);
};
