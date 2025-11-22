import { ContentCard } from "../../cards/ContentCard";
import { CardSkeleton } from "@/shared/loading";
import type { ContentGridProps } from "@/shared/types";

export const ContentGrid = ({
  items,
  isLoading = false,
  loadingCount = 12,
  className,
}: ContentGridProps) => {
  return (
    <div className={className || "container max-w-screen-xl mx-auto p-4"}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isLoading
          ? Array.from({ length: loadingCount }).map((_, index) => (
              <CardSkeleton key={`skeleton-${index}`} />
            ))
          : items.map((item) => <ContentCard key={item.id} {...item} />)}
      </div>
    </div>
  );
};

