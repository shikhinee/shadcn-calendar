import { useRef, useState, useCallback } from 'react';
import FullCalendar from '@fullcalendar/react';
import { DateSelectArg, CalendarEvent } from '@/types/calendar';

export const useCalendarEvents = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [viewedDate, setViewedDate] = useState<Date>(new Date());
  const [selectedStart, setSelectedStart] = useState<Date>(new Date());
  const [selectedEnd, setSelectedEnd] = useState<Date>(new Date());
  
  const handleDateSelect = useCallback((selectInfo: DateSelectArg) => {
    setSelectedStart(selectInfo.start);
    setSelectedEnd(selectInfo.end);
  }, []);

  const handleViewChange = useCallback((view: string) => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.changeView(view);
    }
  }, []);

  const handleNavigate = useCallback((direction: 'prev' | 'next' | 'today') => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      switch (direction) {
        case 'prev':
          calendarApi.prev();
          break;
        case 'next':
          calendarApi.next();
          break;
        case 'today':
          calendarApi.today();
          break;
      }
      setViewedDate(calendarApi.getDate());
    }
  }, []);

  return {
    calendarRef,
    viewedDate,
    selectedStart,
    selectedEnd,
    handleDateSelect,
    handleViewChange,
    handleNavigate,
    setViewedDate,
  };
}; 