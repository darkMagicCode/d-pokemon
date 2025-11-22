import { PageHeader } from "../PageHeader";
import { ViewToggle } from "../../navigation/ViewToggle";
import type { ListingPageHeaderProps } from "@/shared/types";

export const ListingPageHeader = ({
  title,
  description,
  icon,
  iconColor,
  activeView,
  onViewChange,
  actions,
  className = "space-y-4",
  headerClassName,
  toggleClassName,
}: ListingPageHeaderProps) => {
  return (
    <div className={className}>
      <PageHeader
        title={title}
        description={description}
        icon={icon}
        iconColor={iconColor}
        actions={actions}
        className={headerClassName}
      />
      <ViewToggle
        activeView={activeView}
        onViewChange={onViewChange}
        className={toggleClassName}
      />
    </div>
  );
};

