import axiosClient from "./axiosClient";
import type { AxiosRequestConfig } from "axios";

export async function apiGet<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> {
  const response = await axiosClient.get<T>(url, config);
  return response.data;
}
