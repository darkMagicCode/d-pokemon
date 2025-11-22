import { createQueryKeyFactory } from "@/shared/lib";

interface PokemonListParams {
  limit: number;
  offset: number;
}

interface PokemonInfiniteParams {
  limit: number;
}

export const pokemonQueryKeys = createQueryKeyFactory<PokemonListParams | PokemonInfiniteParams>('pokemon');

export const pokemonKeys = {
  all: () => pokemonQueryKeys.all(),

  list: (limit: number, offset: number) =>
    pokemonQueryKeys.list({ limit, offset }),

  detail: (id: string | number) =>
    pokemonQueryKeys.detail(id),

  infinite: (limit: number) =>
    pokemonQueryKeys.infinite({ limit }),
} as const;

