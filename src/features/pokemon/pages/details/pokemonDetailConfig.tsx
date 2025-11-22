import { TypeBadge, AbilityBadge } from "@/shared/components/atoms";
import { padNumber, UnitConversions, formatHyphenated } from "@/shared/lib";
import { GRADIENTS, getStatGradient } from "@/shared/constants";
import {
  PAGES_TEXT,
  COMPONENTS_TEXT,
  POKEMON_CONSTANTS,
  MAX_STAT_VALUE,
  typeColors,
} from "../../constants";
import type { Pokemon } from "../../types";
import type { DetailPageProps } from "@/shared/components/templates/DetailPage/DetailPage";

export const createPokemonDetailConfig = (
  id: string | undefined,
): Omit<DetailPageProps<Pokemon>, "data" | "isLoading" | "error" | "onRetry" | "onBack"> => {
  return {
    title: (pokemon) => pokemon.name,
    metadata: (pokemon) => `#${padNumber(pokemon.id, 3)}`,
    headerGradient: GRADIENTS.POKEMON_DETAIL,

    image: (pokemon) => ({
      src:
        pokemon.sprites.other?.["official-artwork"]?.front_default ||
        pokemon.sprites.front_default ||
        "",
      alt: pokemon.name,
      fallbackSrc: POKEMON_CONSTANTS.PLACEHOLDER_IMAGE,
    }),

    badges: (pokemon) =>
      pokemon.types.map((typeInfo) => (
        <TypeBadge
          key={typeInfo.type.name}
          type={typeInfo.type.name}
          colorMap={typeColors}
        />
      )),

    metrics: (pokemon) => [
      {
        label: COMPONENTS_TEXT.pokemonDetail.height,
        value: UnitConversions.decimetersToMeters(pokemon.height),
        unit: "m",
      },
      {
        label: COMPONENTS_TEXT.pokemonDetail.weight,
        value: UnitConversions.hectogramsToKilograms(pokemon.weight),
        unit: "kg",
      },
    ],

    stats: (pokemon) =>
      pokemon.stats?.map((stat) => ({
        label: formatHyphenated(stat.stat.name),
        value: stat.base_stat,
        maxValue: MAX_STAT_VALUE,
        gradient: `bg-gradient-to-r ${getStatGradient(stat.stat.name)}`,
      })) || [],

    statsTitle: COMPONENTS_TEXT.pokemonDetail.baseStats,

    sections: (pokemon) => {
      const sections = [];

      if (pokemon.abilities && pokemon.abilities.length > 0) {
        sections.push({
          title: COMPONENTS_TEXT.pokemonDetail.abilities,
          content: (
            <div className="flex gap-2 flex-wrap">
              {pokemon.abilities.map((ability) => (
                <AbilityBadge
                  key={ability.ability.name}
                  label={ability.ability.name}
                  suffix={
                    ability.is_hidden
                      ? COMPONENTS_TEXT.abilityBadge.hidden
                      : undefined
                  }
                  formatLabel={formatHyphenated}
                />
              ))}
            </div>
          ),
          spacing: "normal" as const,
        });
      }

      if (pokemon.base_experience) {
        sections.push({
          title: COMPONENTS_TEXT.pokemonDetail.baseExperience,
          content: (
            <p className="font-semibold text-primary">
              {pokemon.base_experience} {COMPONENTS_TEXT.pokemonDetail.xp}
            </p>
          ),
          spacing: "tight" as const,
        });
      }

      return sections;
    },

    errorTitle: PAGES_TEXT.detail.notFound.title,
    errorMessage: () => PAGES_TEXT.detail.notFound.message(id || ""),
    notFoundTitle: PAGES_TEXT.detail.noData.title,
    notFoundMessage: PAGES_TEXT.detail.noData.message,

    backButtonLabel: COMPONENTS_TEXT.backButton,
  };
};

