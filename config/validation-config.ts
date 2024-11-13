import { z } from 'zod';

export const VALIDATION_CONFIG = {
  EVENT: {
    TITLE: {
      MIN_LENGTH: 3,
      MAX_LENGTH: 100,
    },
    DESCRIPTION: {
      MAX_LENGTH: 500,
    },
    TIME: {
      MIN_DURATION: 15, // minutes
      MAX_DURATION: 480, // 8 hours
    },
  },

  SCHEMAS: {
    EVENT: z.object({
      title: z.string()
        .min(3, 'Title must be at least 3 characters')
        .max(100, 'Title must not exceed 100 characters'),
      description: z.string()
        .max(500, 'Description must not exceed 500 characters')
        .optional(),
      start: z.date(),
      end: z.date(),
      color: z.string().optional(),
      category: z.enum(['MEETING', 'PERSONAL', 'HOLIDAY', 'OTHER']).optional(),
    }),
  },
} as const; 