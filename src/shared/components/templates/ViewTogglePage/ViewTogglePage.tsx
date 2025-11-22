import { PageContainer } from "../PageContainer";
import { ListingPageHeader } from "@/shared/components/composites";
import type { ViewTogglePageProps } from "@/shared/types";

export const ViewTogglePage = ({
  title,
  description,
  icon,
  iconColor,
  activeView,
  onViewChange,
  actions,
  children,
  className,
  headerClassName,
  toggleClassName,
  containerClassName,
}: ViewTogglePageProps) => {
  return (
    <PageContainer className={containerClassName}>
      <ListingPageHeader
        title={title}
        description={description}
        icon={icon}
        iconColor={iconColor}
        activeView={activeView}
        onViewChange={onViewChange}
        actions={actions}
        className={className}
        headerClassName={headerClassName}
        toggleClassName={toggleClassName}
      />
      {children}
    </PageContainer>
  );
};

