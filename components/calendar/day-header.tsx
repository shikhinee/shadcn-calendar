"use client";

import { DayHeaderProps } from "@/types/calendar";
import { memo } from "react";
import { format, isSameDay } from "date-fns";
import { cn } from "@/lib/utils";

export const DayHeader = memo(({ info }: DayHeaderProps) => {
  const date = info.date;
  const isToday = isSameDay(date, new Date());

  return (
    <div className="flex flex-col items-start p-2">
      <span className="text-xs text-muted-foreground">
        {format(date, "EEE")}
      </span>
      <span className={cn("text-sm font-medium", isToday && "text-primary")}>
        {format(date, "d")}
      </span>
    </div>
  );
});

DayHeader.displayName = "DayHeader";
