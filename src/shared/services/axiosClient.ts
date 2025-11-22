import axios from "axios";
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import logger from "./logger";
import { API_BASE_URL, EXTERNAL_APIS } from "./apiConfig";

const axiosClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL || EXTERNAL_APIS.POKEMON,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 30000,
});

axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.metadata = { startTime: new Date().getTime() };

    logger.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`, {
      params: config.params,
      data: config.data,
    });

    return config;
  },
  (error: AxiosError) => {
    logger.error("Request error", error);
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    const duration = response.config.metadata
      ? new Date().getTime() - response.config.metadata.startTime
      : 0;

    logger.log(
      `[Response] ${response.config.method?.toUpperCase()} ${response.config.url} - ${response.status} (${duration}ms)`,
    );

    return response;
  },
  (error: AxiosError) => {
    const errorMessage = error.response?.data
      ? JSON.stringify(error.response.data)
      : error.message;

    const status = error.response?.status;
    const url = error.config?.url;

    logger.error(`[Response Error] ${url} - ${status}`, {
      message: errorMessage,
      error,
    });

    let userMessage = "An unexpected error occurred";

    if (error.code === "ECONNABORTED") {
      userMessage = "Request timeout - please try again";
    } else if (!error.response) {
      userMessage = "Network error - please check your connection";
    } else if (status) {
      switch (status) {
        case 400:
          userMessage = "Bad request - please check your input";
          break;
        case 401:
          userMessage = "Unauthorized - please log in";
          break;
        case 403:
          userMessage = "Access forbidden";
          break;
        case 404:
          userMessage = "Resource not found";
          break;
        case 429:
          userMessage = "Too many requests - please try again later";
          break;
        case 500:
          userMessage = "Server error - please try again later";
          break;
        case 503:
          userMessage = "Service unavailable - please try again later";
          break;
      }
    }

    const enhancedError = {
      ...error,
      userMessage,
      originalMessage: errorMessage,
    };

    return Promise.reject(enhancedError);
  },
);

declare module "axios" {
  export interface InternalAxiosRequestConfig {
    metadata?: {
      startTime: number;
    };
  }
}

export default axiosClient;
