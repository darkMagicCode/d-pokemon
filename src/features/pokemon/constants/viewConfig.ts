import { List as ListIcon, Infinity as InfinityIcon } from "lucide-react";
import type { ViewConfig } from "../types";
import { VIEW_TYPES } from "@/shared/constants";

export const VIEW_CONFIGS: Record<string, ViewConfig> = {
  [VIEW_TYPES.PAGINATION]: {
    id: VIEW_TYPES.PAGINATION,
    label: "Pagination",
    title: "Pokemon Collection",
    description: "Browse through all Pokémon.",
    icon: ListIcon,
    iconColor: "text-blue-600",
  },
  [VIEW_TYPES.INFINITE]: {
    id: VIEW_TYPES.INFINITE,
    label: "Infinite",
    title: "Infinite Scroll",
    description: "Scroll to load more Pokémon.",
    icon: InfinityIcon,
    iconColor: "text-emerald-600",
  },
};
