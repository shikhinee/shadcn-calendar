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
    const { adults, children, status, phone } = event.extendedProps;

    const getStatusText = (status: string) => {
      switch (status.toUpperCase()) {
        case "CREATED":
          return "Үүсгэсэн";
        case "PAID":
          return "Төлсөн";
        case "CANCELLED":
          return "Цуцалсан";
        case "PENDING":
          return "Хүлээгдэж буй";
        default:
          return status;
      }
    };

    return (
      <div className="flex flex-col h-full w-full overflow-hidden p-1">
        <div className="flex justify-between items-start">
          <p className="font-medium text-sm truncate">
            {adults + children} хүн
          </p>
          <span
            className="text-[10px] px-1.5 rounded-full"
            style={{
              backgroundColor: event.backgroundColor,
              opacity: 0.2,
              color: event.backgroundColor,
            }}
          >
            {getStatusText(status)}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">Утас: {phone}</p>
      </div>
    );
  }
);

EventItem.displayName = "EventItem";
