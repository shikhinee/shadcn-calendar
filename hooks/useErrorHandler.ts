import { useState, useCallback } from 'react';
import { errorHandler } from '@/utils/error-handling';

export const useErrorHandler = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleError = useCallback((error: unknown) => {
    setError(errorHandler.handle(error));
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const withErrorHandling = useCallback(
    async <T,>(promise: Promise<T>): Promise<T | null> => {
      try {
        setIsLoading(true);
        setError(null);
        return await promise;
      } catch (error) {
        handleError(error);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [handleError]
  );

  return {
    error,
    isLoading,
    handleError,
    clearError,
    withErrorHandling,
  };
}; 