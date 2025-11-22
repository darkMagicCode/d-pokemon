import { isDevelopment } from "./apiConfig";

export const log = (message: string, data?: unknown): void => {
  if (isDevelopment) {
    console.log(`[LOG] ${message}`, data !== undefined ? data : "");
  }
};

export const error = (message: string, error?: unknown): void => {
  if (isDevelopment) {
    console.error(`[ERROR] ${message}`, error);
    if (error instanceof Error && error.stack) {
      console.error("Stack trace:", error.stack);
    }
  }
};

export const warn = (message: string, data?: unknown): void => {
  if (isDevelopment) {
    console.warn(`[WARN] ${message}`, data !== undefined ? data : "");
  }
};

const logger = {
  log,
  error,
  warn,
};

export default logger;
