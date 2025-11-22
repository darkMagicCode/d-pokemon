import { useMemo, useCallback } from "react";
import { ViewTogglePage } from "@/shared/components/templates";
import { useViewState } from "@/shared/hooks";
import { VIEW_TYPES, isValidViewType, type ViewType } from "@/shared/constants";
import { PaginationTab } from "./pagination";
import { InfiniteScrollTab } from "./infinity-scroll";
import { VIEW_CONFIGS } from "../constants/viewConfig";

const PokemonPaginationPage = () => {
  const { view, setView } = useViewState();
  const currentConfig = useMemo(() => VIEW_CONFIGS[view], [view]);

  const handleViewChange = useCallback(
    (viewId: string) => {
      if (isValidViewType(viewId)) {
        setView(viewId as ViewType);
      }
    },
    [setView],
  );

  return (
    <ViewTogglePage
      title={currentConfig.title}
      description={currentConfig.description}
      icon={currentConfig.icon}
      iconColor={currentConfig.iconColor}
      activeView={view}
      onViewChange={handleViewChange}
    >
      {view === VIEW_TYPES.PAGINATION ? <PaginationTab /> : <InfiniteScrollTab />}
    </ViewTogglePage>
  );
};

export { PokemonPaginationPage as Component };
