export const POKEMON_CONSTANTS = {
  DEFAULT_LIMIT: 20,
  PLACEHOLDER_IMAGE: "/placeholder-pokemon.png",
  POKEMON_KEY: "pokemon" as const,
  ROUTES: {
    BASE: "/pokemon",
    detail: (id: number | string) => `/pokemon/${id}`,
  },
} as const;
