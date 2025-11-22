import { ListingPageHeader } from "@/shared/components/composites/headers/ListingPageHeader";
import { ContentGrid, Pagination } from "@/shared/components/composites";
import { ErrorDisplay } from "@/shared/error";
import type { ContentCardProps } from "@/shared/components/composites";
import type { ComponentType, ReactNode } from "react";

export interface ListingPageProps {
  title: string;
  description?: string;
  icon?: ComponentType<{ className?: string }>;
  iconColor?: string;
  actions?: ReactNode;
  activeView: string;
  onViewChange: (viewId: string) => void;
  items: ContentCardProps[];
  isLoading?: boolean;
  loadingCount?: number;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    labels?: {
      previousPage?: string;
      nextPage?: string;
      page?: (page: number) => string;
      ellipsis?: string;
    };
  };
  error?: Error | null;
  onRetry?: () => void;
  className?: string;
  headerClassName?: string;
  gridClassName?: string;
  paginationClassName?: string;
}

export const ListingPage = ({
  title,
  description,
  icon,
  iconColor,
  actions,
  activeView,
  onViewChange,
  items,
  isLoading = false,
  loadingCount = 12,
  pagination,
  error,
  onRetry,
  className = "space-y-6 min-h-screen",
  headerClassName,
  gridClassName,
  paginationClassName,
}: ListingPageProps) => {
  const headerProps = {
    title,
    description,
    icon,
    iconColor,
    activeView,
    onViewChange,
    actions,
    className: headerClassName,
  };

  const shouldShowPagination =
    pagination && pagination.totalPages > 0 && !isLoading;

  return (
    <div className={className}>
      <ListingPageHeader {...headerProps} />

      {error ? (
        <ErrorDisplay onRetry={onRetry} />
      ) : (
        <>
          <ContentGrid
            items={items}
            isLoading={isLoading}
            loadingCount={loadingCount}
            className={gridClassName}
          />

          {shouldShowPagination && (
            <Pagination
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={pagination.onPageChange}
              labels={pagination.labels}
              className={paginationClassName}
            />
          )}
        </>
      )}
    </div>
  );
};

