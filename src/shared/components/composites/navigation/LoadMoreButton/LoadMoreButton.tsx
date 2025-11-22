import { Button } from "@/shared/components/atoms";

export interface LoadMoreButtonProps {
  canLoadMore: boolean;
  isLoading: boolean;
  onLoadMore: () => void;
  loadingText?: string;
  loadMoreText?: string;
  allLoadedText?: string;
  className?: string;
}

export const LoadMoreButton = ({
  canLoadMore,
  isLoading,
  onLoadMore,
  loadingText = "Loading...",
  loadMoreText = "Load More",
  allLoadedText = "All items loaded",
  className = "",
}: LoadMoreButtonProps) => {
  return (
    <div className={`py-4 flex justify-center ${className}`}>
      {canLoadMore ? (
        <Button
          onClick={onLoadMore}
          disabled={isLoading}
          variant="outline"
        >
          {isLoading ? loadingText : loadMoreText}
        </Button>
      ) : (
        <p className="text-sm text-muted-foreground">
          {allLoadedText}
        </p>
      )}
    </div>
  );
};

