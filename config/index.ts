import { CALENDAR_CONFIG, CALENDAR_PLUGINS } from './calendar-config';

export * from './calendar-config';
export * from './theme-config';
export * from './localization-config';
export * from './validation-config';
export * from './api-config';

// You can also create merged configurations for specific use cases
export const CALENDAR_SETTINGS = {
  ...CALENDAR_CONFIG.DEFAULTS,
  plugins: CALENDAR_PLUGINS,
  views: {
    [CALENDAR_CONFIG.VIEWS.MONTH]: {
      eventLimit: 3,
      eventLimitText: 'more',
    },
    [CALENDAR_CONFIG.VIEWS.WEEK]: {
      slotDuration: CALENDAR_CONFIG.TIME.SLOT_DURATION,
      snapDuration: CALENDAR_CONFIG.TIME.SNAP_DURATION,
    },
  },
} as const; 