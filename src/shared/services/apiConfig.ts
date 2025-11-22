export const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL as string | undefined;

export const isDevelopment = import.meta.env.DEV;

export const EXTERNAL_APIS = {
  POKEMON: import.meta.env?.VITE_POKEMON_API_BASE_URL || 'https://pokeapi.co/api/v2',
  POKEMON_SPRITES: import.meta.env?.VITE_POKEMON_SPRITES_BASE_URL || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork',
} as const;
