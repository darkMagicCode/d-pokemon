import { useLocation } from "react-router-dom";
import { useCurrentView } from "@/shared/hooks";
import { PAGE_BACKGROUNDS, VIEW_TYPES } from "@/shared/constants";

export const usePageBackground = (): string | undefined => {
  const location = useLocation();
  const view = useCurrentView();
  const pathname = location.pathname;

  if (/^\/pokemon\/\d+/.test(pathname)) {
    return PAGE_BACKGROUNDS.DETAIL;
  } 
  
  if (pathname.startsWith("/pokemon")) {
    return view === VIEW_TYPES.INFINITE 
      ? PAGE_BACKGROUNDS.INFINITE 
      : PAGE_BACKGROUNDS.PAGINATION;
  }

  return PAGE_BACKGROUNDS.DEFAULT;
};
