"use client";

import { EventItemProps } from "@/types/calendar";
import { memo } from "react";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { Spinner } from "../loading/spinner";

export const EventItem = memo(
  ({ info, onDelete, onUpdate, isLoading }: EventItemProps) => {
    const { event } = info;
    const [left, right] = info.timeText.split(" - ");

    return (
      <div className="flex flex-col h-full w-full overflow-hidden">
        <div className="flex flex-col space-y-0.5 p-1">
          <p className="font-medium text-sm truncate">{event.title}</p>
          <div className="flex items-center space-x-1">
            <p className="text-xs opacity-80">{info.timeText}</p>
            {event.extendedProps?.vip && (
              <span className="text-[10px] bg-primary/20 text-primary px-1 rounded">
                VIP
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
);

EventItem.displayName = "EventItem";
