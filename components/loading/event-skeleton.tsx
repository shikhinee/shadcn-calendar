import { Skeleton } from "@/components/ui/skeleton";

export const EventSkeleton = () => {
  return (
    <div className="p-2 space-y-1">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
    </div>
  );
};
