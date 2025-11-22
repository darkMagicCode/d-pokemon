import { cn } from "@/shared/lib/utils";
import { DEFAULT_VIEWS } from "@/shared/constants";
import type { ViewToggleProps } from "@/shared/types";
import { ViewToggleButton } from "./ViewToggleButton";

export const ViewToggle = ({
  views = DEFAULT_VIEWS,
  activeView,
  onViewChange,
  className,
}: ViewToggleProps) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="inline-flex items-center gap-2 rounded-lg border bg-card p-1">
        {views.map((view) => (
          <ViewToggleButton
            key={view.id}
            view={view}
            isActive={activeView === view.id}
            onClick={() => onViewChange(view.id)}
          />
        ))}
      </div>
    </div>
  );
};

