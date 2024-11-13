export const THEME_CONFIG = {
  COLORS: {
    PRIMARY: {
      DEFAULT: '#3788d8',
      LIGHT: '#5a9de9',
      DARK: '#2c6cb0',
    },
    SECONDARY: {
      DEFAULT: '#6c757d',
      LIGHT: '#868e96',
      DARK: '#495057',
    },
    SUCCESS: {
      DEFAULT: '#28a745',
      LIGHT: '#34ce57',
      DARK: '#1e7e34',
    },
    DANGER: {
      DEFAULT: '#dc3545',
      LIGHT: '#e4606d',
      DARK: '#bd2130',
    },
    WARNING: {
      DEFAULT: '#ffc107',
      LIGHT: '#ffcd39',
      DARK: '#d39e00',
    },
    INFO: {
      DEFAULT: '#17a2b8',
      LIGHT: '#1fc8e3',
      DARK: '#117a8b',
    },
  },

  EVENT_CATEGORIES: {
    MEETING: {
      color: '#3788d8',
      textColor: '#ffffff',
      borderColor: '#2c6cb0',
    },
    PERSONAL: {
      color: '#28a745',
      textColor: '#ffffff',
      borderColor: '#1e7e34',
    },
    HOLIDAY: {
      color: '#dc3545',
      textColor: '#ffffff',
      borderColor: '#bd2130',
    },
    OTHER: {
      color: '#6c757d',
      textColor: '#ffffff',
      borderColor: '#495057',
    },
  },
} as const; 