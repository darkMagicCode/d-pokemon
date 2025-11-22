import { Skeleton, Card, CardContent, CardHeader } from "@/shared/components/atoms";

export const DetailSkeleton = () => {
  return (
    <Card className="max-w-5xl mx-auto shadow-lg">
      <CardHeader className="p-0">
        <div className="rounded-t-lg bg-muted px-6 py-6">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Skeleton className="w-64 h-64 md:w-72 md:h-72 rounded-full" />
            </div>

            <div className="flex justify-center gap-2">
              <Skeleton className="h-7 w-20 rounded-full" />
              <Skeleton className="h-7 w-20 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border bg-card p-4 text-center space-y-2">
                <Skeleton className="h-3 w-12 mx-auto" />
                <Skeleton className="h-6 w-16 mx-auto" />
              </div>
              <div className="rounded-lg border bg-card p-4 text-center space-y-2">
                <Skeleton className="h-3 w-12 mx-auto" />
                <Skeleton className="h-6 w-16 mx-auto" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <Skeleton className="h-6 w-28" />
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-8" />
                  </div>
                  <Skeleton className="w-full h-2.5 rounded-full" />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Skeleton className="h-6 w-24" />
              <div className="flex gap-2 flex-wrap">
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
            </div>

            <div className="space-y-1">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

