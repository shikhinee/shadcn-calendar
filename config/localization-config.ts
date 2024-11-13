export const LOCALIZATION_CONFIG = {
  DATETIME_FORMATS: {
    FULL_DATE: 'EEEE, MMMM d, yyyy',
    SHORT_DATE: 'MMM d, yyyy',
    MONTH_YEAR: 'MMMM yyyy',
    TIME: 'h:mm a',
    FULL_DATETIME: 'MMM d, yyyy h:mm a',
  },

  MESSAGES: {
    ERRORS: {
      LOAD_FAILED: 'Failed to load calendar events',
      CREATE_FAILED: 'Failed to create event',
      UPDATE_FAILED: 'Failed to update event',
      DELETE_FAILED: 'Failed to delete event',
    },
    SUCCESS: {
      EVENT_CREATED: 'Event created successfully',
      EVENT_UPDATED: 'Event updated successfully',
      EVENT_DELETED: 'Event deleted successfully',
    },
    CONFIRMATIONS: {
      DELETE_EVENT: 'Are you sure you want to delete this event?',
      DISCARD_CHANGES: 'Are you sure you want to discard changes?',
    },
  },

  LABELS: {
    BUTTONS: {
      PREVIOUS: 'Previous',
      NEXT: 'Next',
      TODAY: 'Today',
      CREATE: 'Create Event',
      UPDATE: 'Update Event',
      DELETE: 'Delete Event',
      CANCEL: 'Cancel',
      SAVE: 'Save',
    },
    VIEWS: {
      MONTH: 'Month',
      WEEK: 'Week',
      DAY: 'Day',
      LIST: 'List',
    },
  },
} as const; 