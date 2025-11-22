import { cn } from "@/shared/lib/utils";
import type { ViewOption } from "@/shared/types";

export interface ViewToggleButtonProps {
  view: ViewOption;
  isActive: boolean;
  onClick: () => void;
}

export const ViewToggleButton = ({
  view,
  isActive,
  onClick,
}: ViewToggleButtonProps) => {
  const Icon = view.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:text-foreground hover:bg-muted",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <Icon className="h-4 w-4" />
      <span>{view.label}</span>
    </button>
  );
};

