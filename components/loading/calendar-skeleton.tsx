import { Skeleton } from "@/components/ui/skeleton";

export const CalendarSkeleton = () => {
  return (
    <div className="space-y-4 p-5">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
        </div>
        <Skeleton className="h-10 w-32" />
      </div>

      {/* Calendar Grid Skeleton */}
      <div className="border rounded-lg">
        {/* Week Header */}
        <div className="grid grid-cols-7 gap-px border-b">
          {Array.from({ length: 7 }).map((_, i) => (
            <Skeleton key={`header-${i}`} className="h-12 rounded-none" />
          ))}
        </div>

        {/* Calendar Days */}
        {Array.from({ length: 6 }).map((_, weekIndex) => (
          <div key={`week-${weekIndex}`} className="grid grid-cols-7 gap-px">
            {Array.from({ length: 7 }).map((_, dayIndex) => (
              <div
                key={`day-${weekIndex}-${dayIndex}`}
                className="min-h-[120px] p-2"
              >
                <Skeleton className="h-6 w-6 rounded-full mb-2" />
                <Skeleton className="h-4 w-20 mb-1" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
