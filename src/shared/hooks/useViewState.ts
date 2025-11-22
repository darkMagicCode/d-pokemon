import { useState, useEffect, type Dispatch, type SetStateAction } from "react";
import { useSearchParams } from "react-router-dom";
import { updateSearchParams, removeSearchParams } from "../lib";
import { VIEW_TYPES, getValidViewType, type ViewType } from "../constants";

export interface UseViewStateReturn {
  view: ViewType;
  setView: Dispatch<SetStateAction<ViewType>>;
}

export const useViewState = (): UseViewStateReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const viewParam = searchParams.get("view");
  const initialView = getValidViewType(viewParam);
  
  const [view, setView] = useState<ViewType>(initialView);

  useEffect(() => {
    setSearchParams((prev) => {
      let next = updateSearchParams(prev, { view });
      
      if (view === VIEW_TYPES.INFINITE) {
        next = removeSearchParams(next, ['page']);
        if (!next.get('cursor')) {
          next = updateSearchParams(next, { cursor: 1 });
        }
      } else {
        next = removeSearchParams(next, ['cursor']);
      }
      
      return next;
    }, { replace: true });
  }, [view, setSearchParams]);

  return { view, setView };
};

