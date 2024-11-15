"use client";

import { DayHeaderContentArg } from "@fullcalendar/core";
import { format as formatDate } from "date-fns";
import { mn } from "date-fns/locale";

interface DayHeaderProps {
  info: DayHeaderContentArg;
  locale?: string;
  formatStr?: string;
}

export const DayHeader: React.FC<DayHeaderProps> = ({
  info,
  locale = "mn",
  formatStr = "EEE MM/dd",
}) => {
  const date = info.date;
  const formattedDate = formatDate(date, formatStr, { locale: mn });

  return <div className="font-medium text-sm">{formattedDate}</div>;
};
