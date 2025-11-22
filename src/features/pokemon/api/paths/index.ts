import { POKEMON_CONSTANTS } from "../../constants";

export const paths = {
  pokemon: {
    list: POKEMON_CONSTANTS.POKEMON_KEY,
    detail: (id: string | number): string =>
      `${POKEMON_CONSTANTS.POKEMON_KEY}/${id}`,
  },
} as const;

export type Paths = typeof paths;
