import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractIdFromUrl = (
  url: string | null | undefined,
  pattern: RegExp = /\/(\d+)\/?$/,
): number | null => {
  if (!url) {
    return null;
  }

  const match = url.match(pattern);

  if (!match || !match[1]) {
    return null;
  }

  const id = Number(match[1]);

  return Number.isFinite(id) ? id : null;
};

export const buildResourceUrl = (
  baseUrl: string,
  id: number | string,
  extension: string = '',
): string => {
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');
  return `${cleanBaseUrl}/${id}${extension}`;
};

export const calculateTotalPages = (
  totalCount: number,
  itemsPerPage: number,
): number => {
  if (totalCount <= 0 || itemsPerPage <= 0) {
    return 1;
  }
  return Math.max(1, Math.ceil(totalCount / itemsPerPage));
};

export const padNumber = (num: number | string, length: number = 3): string => {
  return String(num).padStart(length, "0");
};

