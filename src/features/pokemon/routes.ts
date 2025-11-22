import type { RouteObject } from "react-router-dom";

export const pokemonRoutes: RouteObject = {
  path: "pokemon",
  lazy: () => import("./PokemonLayout"),
  children: [
    {
      index: true,
      lazy: () => import("./pages"),
    },
    {
      path: ":id",
      lazy: () => import("./pages/details"),
    },
  ],
};
