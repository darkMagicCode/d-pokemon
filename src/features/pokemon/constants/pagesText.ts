export const PAGES_TEXT = {
  detail: {
    notFound: {
      title: "Pokemon Not Found",
      message: (id: string | undefined) =>
        `Unable to find Pokemon with ID "${id}". It may not exist or there was an error loading it.`,
    },
    noData: {
      title: "No Data",
      message: "Pokemon data is not available.",
    },
  },
  infiniteScroll: {
    loading: "Loading…",
    loadMore: "Load More Pokémon",
    allLoaded: "All Pokémon loaded.",
    loadedCount: (loaded: number, total: number) =>
      `Loaded ${loaded} of ${total}`,
  },
} as const;

export const COMPONENTS_TEXT = {
  backButton: "Back to Pokemon",
  pokemonCard: {
    viewDetails: (name: string) => `View details for ${name}`,
    idPrefix: "#",
  },
  pokemonDetail: {
    height: "Height",
    weight: "Weight",
    baseStats: "Base Stats",
    abilities: "Abilities",
    baseExperience: "Base Experience",
    xp: "XP",
  },
  pagination: {
    previousPage: "Previous page",
    nextPage: "Next page",
    page: (pageNumber: number) => `Page ${pageNumber}`,
    ellipsis: "...",
  },
  loadMore: {
    noMore: "No more Pokemon to load",
    loading: "Loading...",
    loadMore: "Load More Pokemon",
  },
  loadingIndicator: "Loading more...",
  abilityBadge: {
    hidden: " (Hidden)",
  },
} as const;
