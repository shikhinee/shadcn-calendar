"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarNavProps, CalendarView } from "@/types/calendar";
import { format } from "date-fns";
import { mn } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { CALENDAR_CONFIG } from "@/config/calendar-config";

const AnimatedTabsTrigger = motion.create(TabsTrigger);

export default function CalendarNav({
  calendarRef,
  viewedDate,
  currentView,
  onViewChange,
}: CalendarNavProps) {
  const handlePrev = () => {
    calendarRef.current?.getApi().prev();
  };

  const handleNext = () => {
    calendarRef.current?.getApi().next();
  };

  const handleToday = () => {
    calendarRef.current?.getApi().today();
  };

  const handleViewChange = (view: string) => {
    onViewChange(view as CalendarView);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="icon" onClick={handlePrev}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button variant="outline" onClick={handleToday}>
          Өнөөдөр
        </Button>
      </div>
      <h2 className="text-xl font-bold">
        {format(viewedDate, "MMMM yyyy", { locale: mn })}
      </h2>
      <Tabs
        value={currentView}
        onValueChange={handleViewChange}
        className="w-[400px]"
      >
        <TabsList className="grid w-full grid-cols-3">
          <AnimatedTabsTrigger value={CALENDAR_CONFIG.VIEWS.DAY}>
            Өдөр
          </AnimatedTabsTrigger>
          <AnimatedTabsTrigger value={CALENDAR_CONFIG.VIEWS.WEEK}>
            7 хоног
          </AnimatedTabsTrigger>
          <AnimatedTabsTrigger value={CALENDAR_CONFIG.VIEWS.MONTH}>
            Сар
          </AnimatedTabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
