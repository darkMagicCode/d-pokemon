import { CardSkeleton } from "../CardSkeleton";

export const GridSkeleton = ({ count = 12 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};

