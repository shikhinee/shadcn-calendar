import { EventApi, EventClickArg, EventInput, DateSelectArg, DayHeaderContentArg, DayCellContentArg, EventContentArg } from '@fullcalendar/core'
import { MutableRefObject } from 'react'
import FullCalendar from '@fullcalendar/react'

export type { DateSelectArg, DayHeaderContentArg, DayCellContentArg, EventContentArg, EventClickArg }

export interface CalendarEvent extends EventInput {
  id: string
  title: string
  start: Date
  end: Date
  extendedProps: {
    description: string
  }
  backgroundColor?: string
}

export interface EventItemProps {
  info: EventContentArg
  onDelete?: (id: string) => Promise<void>
  onUpdate?: (id: string, updates: Partial<CalendarEvent>) => Promise<void>
  isLoading?: boolean
}

export interface CalendarNavProps {
  calendarRef: MutableRefObject<FullCalendar | null>
  viewedDate: Date
  start: Date
  end: Date
  currentView: CalendarView
  onViewChange?: (view: CalendarView) => void
  onNavigate?: (direction: 'prev' | 'next' | 'today') => void
}

export interface CalendarProps {
  events: CalendarEvent[]
  onEventAdd?: (event: CalendarEvent) => Promise<void>
  onEventUpdate?: (id: string, updates: Partial<CalendarEvent>) => Promise<void>
  onEventDelete?: (id: string) => Promise<void>
}

export interface DayHeaderProps {
  info: DayHeaderContentArg
}

export interface DayRenderProps {
  info: DayCellContentArg
}

export type CalendarView = 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay' 