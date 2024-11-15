import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { PluginDef } from "@fullcalendar/core";
import { CalendarView } from "@/types/calendar";

export const CALENDAR_PLUGINS: PluginDef[] = [
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin,
];

export const CALENDAR_CONFIG = {
  VIEWS: {
    MONTH: 'dayGridMonth',
    WEEK: 'timeGridWeek',
    DAY: 'timeGridDay',
  },

  TIME: {
    SLOT_MIN_TIME: '00:00:00',
    SLOT_MAX_TIME: '24:00:00',
    SLOT_DURATION: '00:30:00',
    SNAP_DURATION: '00:15:00',
  },

  DEFAULTS: {
    INITIAL_VIEW: 'timeGridWeek',
    FIRST_DAY: 1,
    ALL_DAY_SLOT: false,
    EDITABLE: true,
    SELECTABLE: true,
    NOW_INDICATOR: true,
  },
} as const; 