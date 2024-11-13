import { toast } from "@/hooks/use-toast";

export class CalendarError extends Error {
  constructor(
    message: string,
    public code: string,
    public action?: string
  ) {
    super(message);
    this.name = 'CalendarError';
  }
}

export const errorHandler = {
  handle: (error: unknown, fallbackMessage = 'An unexpected error occurred') => {
    if (error instanceof CalendarError) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
      return error;
    }

    if (error instanceof Error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
      return error;
    }

    const genericError = new Error(fallbackMessage);
    toast({
      variant: 'destructive',
      title: 'Error',
      description: fallbackMessage,
    });
    return genericError;
  },

  createCalendarError: (
    code: string,
    message: string,
    action?: string
  ) => {
    return new CalendarError(message, code, action);
  },
}; 