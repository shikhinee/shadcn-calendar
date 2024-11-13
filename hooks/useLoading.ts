import { useState, useCallback } from "react";

export const useLoading = (initialState = false) => {
  const [isLoading, setIsLoading] = useState(initialState);
  const [loadingMessage, setLoadingMessage] = useState<string>("");

  const startLoading = useCallback((message = "Loading...") => {
    setIsLoading(true);
    setLoadingMessage(message);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
    setLoadingMessage("");
  }, []);

  const withLoading = useCallback(
    async <T,>(
      promise: Promise<T>,
      message = "Loading..."
    ): Promise<T> => {
      try {
        startLoading(message);
        return await promise;
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  return {
    isLoading,
    loadingMessage,
    startLoading,
    stopLoading,
    withLoading,
  };
}; 