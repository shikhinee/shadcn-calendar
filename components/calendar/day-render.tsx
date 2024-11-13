"use client";

import { DayRenderProps } from "@/types/calendar";
import { PlusIcon } from "lucide-react";
import { memo, useState } from "react";

export const DayRender = memo(({ info }: DayRenderProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex w-full h-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? (
        <div className="flex w-full h-full justify-center transition-opacity duration-100 ease-in-out opacity-0 hover:opacity-100">
          <PlusIcon className="h-5 w-5" />
        </div>
      ) : (
        <div>{info.dayNumberText}</div>
      )}
    </div>
  );
});

DayRender.displayName = "DayRender";
