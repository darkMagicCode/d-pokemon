import { useMemo } from "react";

export interface ErrorHandlerConfig {
  error: Error | null | undefined;
  onRetry?: () => void;
}

export interface ErrorHandlerResult {
  hasError: boolean;
  error: Error | null;
  onRetry?: () => void;
}

export const useErrorHandler = ({
  error,
  onRetry,
}: ErrorHandlerConfig): ErrorHandlerResult => {
  return useMemo(
    () => ({
      hasError: Boolean(error),
      error: error || null,
      onRetry,
    }),
    [error, onRetry],
  );
};

