"use client";

import { useRef, useState, useCallback } from "react";
import FullCalendar from "@fullcalendar/react";
import { CALENDAR_PLUGINS, CALENDAR_CONFIG } from "@/config/calendar-config";
import { EventItem } from "./event-item";
import { DayHeader } from "./day-header";
import { DayRender } from "./day-render";
import CalendarNav from "./calendar-nav";
import { useLoading } from "@/hooks/useLoading";
import { CalendarErrorBoundary } from "../error-boundaries/calendar-error-boundary";
import { CalendarProps, CalendarView } from "@/types/calendar";

const Calendar: React.FC<CalendarProps> = ({
  events,
  onEventAdd,
  onEventUpdate,
  onEventDelete,
}) => {
  const calendarRef = useRef<FullCalendar>(null);
  const [viewedDate, setViewedDate] = useState<Date>(new Date());
  const [currentView, setCurrentView] = useState<CalendarView>(
    CALENDAR_CONFIG.DEFAULTS.INITIAL_VIEW
  );
  const { isLoading, withLoading } = useLoading();

  const handleViewChange = useCallback((view: CalendarView) => {
    setCurrentView(view);
    calendarRef.current?.getApi().changeView(view);
  }, []);

  return (
    <CalendarErrorBoundary>
      <div className="flex flex-col h-[calc(100vh-2rem)] bg-background relative">
        {isLoading && (
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        )}
        <CalendarNav
          calendarRef={calendarRef}
          viewedDate={viewedDate}
          currentView={currentView}
          onViewChange={handleViewChange}
          start={new Date()}
          end={new Date()}
        />

        <div className="flex-1 overflow-auto">
          <FullCalendar
            ref={calendarRef}
            plugins={CALENDAR_PLUGINS}
            initialView={currentView}
            headerToolbar={false}
            events={events}
            eventContent={(eventInfo) => (
              <EventItem
                info={eventInfo}
                onDelete={onEventDelete}
                onUpdate={onEventUpdate}
                isLoading={isLoading}
              />
            )}
            dayHeaderContent={(info) => <DayHeader info={info} />}
            dayCellContent={(info) => <DayRender info={info} />}
            height="100%"
            slotMinTime={CALENDAR_CONFIG.TIME.SLOT_MIN_TIME}
            slotMaxTime={CALENDAR_CONFIG.TIME.SLOT_MAX_TIME}
            slotDuration={CALENDAR_CONFIG.TIME.SLOT_DURATION}
            snapDuration={CALENDAR_CONFIG.TIME.SNAP_DURATION}
            firstDay={CALENDAR_CONFIG.DEFAULTS.FIRST_DAY}
            allDaySlot={CALENDAR_CONFIG.DEFAULTS.ALL_DAY_SLOT}
            editable={CALENDAR_CONFIG.DEFAULTS.EDITABLE}
            selectable={CALENDAR_CONFIG.DEFAULTS.SELECTABLE}
            nowIndicator={CALENDAR_CONFIG.DEFAULTS.NOW_INDICATOR}
            stickyHeaderDates={true}
            handleWindowResize={true}
            datesSet={(dateInfo) => setViewedDate(dateInfo.start)}
          />
        </div>
      </div>
    </CalendarErrorBoundary>
  );
};

export default Calendar;
