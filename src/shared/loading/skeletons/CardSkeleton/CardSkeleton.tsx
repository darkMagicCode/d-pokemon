import { Skeleton } from "@/shared/components/atoms";

export const CardSkeleton = () => {
  return (
    <div className="rounded-lg border bg-card p-4 space-y-3">
      <Skeleton className="h-40 w-full rounded-md" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-3 w-1/3" />
    </div>
  );
};

