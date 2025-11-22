import { List as ListIcon, Infinity as InfinityIcon } from "lucide-react";
import type { ViewOption } from "../types";

export const DEFAULT_VIEWS: ViewOption[] = [
  {
    id: "pagination",
    label: "Pagination",
    icon: ListIcon,
  },
  {
    id: "infinite",
    label: "Infinite",
    icon: InfinityIcon,
  },
];

export const DEFAULT_VIEW_STYLES = {
  iconColor: "text-sky-600",
  buttonActiveClass: "bg-blue-600 hover:bg-blue-700 text-white",
  iconActiveClass: "text-blue-100",
  iconInactiveClass: "text-blue-500",
  indicatorClass:
    "bg-gradient-to-r from-blue-500 via-blue-600 to-sky-500 shadow-lg shadow-blue-500/40",
  activeTextClass: "text-white",
  inactiveTextClass: "text-blue-500",
} as const;

