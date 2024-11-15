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
import { CalendarProps, CalendarEvent, CalendarView } from "@/types/calendar";
import { MN_LOCALE } from "@/lib/localization/mn";

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
  const { isLoading } = useLoading();

  const getStatusColor = (status: string) => {
    if (!status) return "hsl(var(--muted))";

    switch (status.toUpperCase()) {
      case "CREATED":
        return "hsl(var(--primary))";
      case "PAID":
        return "hsl(var(--success))";
      case "CANCELLED":
        return "hsl(var(--destructive))";
      case "PENDING":
        return "hsl(var(--warning))";
      default:
        return "hsl(var(--muted))";
    }
  };

  const handleViewChange = useCallback((view: CalendarView) => {
    setCurrentView(view);
    calendarRef.current?.getApi().changeView(view);
  }, []);

  const transformedEvents = events.map((event) => {
    console.log("Event being transformed:", event); // Debug log
    return {
      ...event,
      backgroundColor: getStatusColor(event.extendedProps?.status || ""),
      classNames: `status-${
        event.extendedProps?.status?.toLowerCase() || "default"
      }`,
    };
  });

  return (
    <CalendarErrorBoundary>
      <div className="flex flex-col h-[calc(100vh-2rem)] bg-background">
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
            locale={MN_LOCALE}
            headerToolbar={false}
            events={transformedEvents}
            slotLabelFormat={{
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }}
            dayHeaderFormat={{
              weekday: "short",
              month: "2-digit",
              day: "2-digit",
              omitCommas: true,
            }}
            eventTimeFormat={{
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }}
            eventContent={(eventInfo) => (
              <EventItem
                info={eventInfo}
                onDelete={onEventDelete}
                onUpdate={onEventUpdate}
                isLoading={isLoading}
              />
            )}
            dayHeaderContent={(info) => (
              <DayHeader info={info} locale="mn" formatStr="EEE MM/dd" />
            )}
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
