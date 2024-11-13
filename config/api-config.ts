export const API_CONFIG = {
  ENDPOINTS: {
    EVENTS: {
      BASE: '/api/events',
      CREATE: '/api/events',
      UPDATE: (id: string) => `/api/events/${id}`,
      DELETE: (id: string) => `/api/events/${id}`,
      GET_ALL: '/api/events',
      GET_BY_ID: (id: string) => `/api/events/${id}`,
      GET_BY_DATE_RANGE: '/api/events/range',
    },
  },

  REQUEST_CONFIG: {
    TIMEOUT: 5000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000,
  },

  CACHE: {
    EVENTS_TTL: 5 * 60 * 1000, // 5 minutes
    STALE_TIME: 60 * 1000, // 1 minute
  },
} as const; 