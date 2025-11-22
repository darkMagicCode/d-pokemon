export interface NamedResource {
  name: string;
  url: string;
}

export interface PokemonSprites {
  front_default: string;
  other?: {
    "official-artwork"?: {
      front_default: string;
    };
    dream_world?: {
      front_default: string;
    };
  };
}

export interface PokemonType {
  type: NamedResource;
  slot: number;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedResource;
}

export interface PokemonAbility {
  ability: NamedResource;
  is_hidden: boolean;
  slot: number;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats?: PokemonStat[];
  abilities?: PokemonAbility[];
  base_experience?: number;
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse extends Record<string, unknown> {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}
