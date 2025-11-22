import type { ComponentType } from "react";
import type { Pokemon, PokemonAbility } from "./api";
import type { LucideIcon } from "lucide-react";

export interface ViewConfig {
  id: "pagination" | "infinite";
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  buttonActiveClass?: string;
  iconActiveClass?: string;
  iconInactiveClass?: string;
  indicatorClass?: string;
  activeTextClass?: string;
  inactiveTextClass?: string;
}

export interface PokemonCardData {
  id: number;
  name: string;
  sprite: string;
  types?: string[];
}

export interface PokemonCardProps {
  id: number;
  name: string;
  sprite: string;
}

export interface PokemonDetailProps {
  pokemon: Pokemon;
}

export interface PokemonGridProps {
  pokemon: PokemonCardData[];
  isLoading?: boolean;
  loadingCount?: number;
}

export interface PokemonPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface PokemonLoadMoreProps {
  onClick: () => void;
  isLoading?: boolean;
  hasMore?: boolean;
}

export interface ViewToggleProps {
  activeView: "pagination" | "infinite";
  onViewChange: (view: "pagination" | "infinite") => void;
}

export interface PageHeaderProps {
  title: string;
  description: string;
  icon?: ComponentType<{ className?: string }>;
  iconColor?: string;
}

export interface AbilityBadgeProps {
  ability: PokemonAbility;
}

export interface MetricCardProps {
  label: string;
  value: string;
  unit: string;
}

export interface StatBarProps {
  name: string;
  value: number;
}

export interface PokemonDetailPageLoadingProps {
  onBack: () => void;
}

export interface PokemonDetailBackButtonProps {
  onBack: () => void;
  className?: string;
}
