import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getValidViewType, type ViewType } from "../constants";

export const useCurrentView = (): ViewType => {
  const [searchParams] = useSearchParams();

  return useMemo(() => {
    const viewParam = searchParams.get("view");
    return getValidViewType(viewParam);
  }, [searchParams]);
};

