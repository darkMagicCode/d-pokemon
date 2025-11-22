import type { Pokemon } from "@/features/pokemon/types";

export interface ErrorDisplayProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  onBack?: () => void;
  onGoHome?: () => void;
  showGoHome?: boolean;
  showGoBack?: boolean;
  homePath?: string;
}

export interface RootErrorBoundaryProps {
  homePath?: string;
  onGoHome?: () => void;
  onGoBack?: () => void;
}

export interface AppLayoutProps {
  children: React.ReactNode;
}

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface ViewTogglePageProps extends Omit<ListingPageHeaderProps, 'activeView' | 'onViewChange'> {
  activeView: string;
  onViewChange: (viewId: string) => void;
  children: React.ReactNode;
  containerClassName?: string;
}

export interface FooterProps {
  backgroundColor?: string;
}

export interface DetailBodyProps {
  pokemon: Pokemon;
}

export interface DetailHeaderProps {
  name: string;
  id: number;
}

export interface ViewOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ViewToggleProps {
  views?: ViewOption[];
  activeView: string;
  onViewChange: (viewId: string) => void;
  className?: string;
}

export interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  iconColor?: string;
  actions?: React.ReactNode;
  className?: string;
}

export interface ListingPageHeaderProps extends Omit<PageHeaderProps, 'actions'> {
  activeView: string;
  onViewChange: (viewId: string) => void;
  actions?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  toggleClassName?: string;
}

export interface ListingPageContentProps {
  items: ContentCardProps[];
  isLoading?: boolean;
  loadingCount?: number;
  pagination?: {
    totalCount?: number;
    currentPage: number;
    totalPages: (totalCount: number) => number;
    onPageChange: (page: number) => void;
  };
  error?: Error | null;
  onRetry?: () => void;
  gridClassName?: string;
  paginationClassName?: string;
}

export interface ContentCardProps {
  id: string | number;
  title: string;
  subtitle?: string;
  image: string;
  metadata?: string;
  onClick: () => void;
  ariaLabel?: string;
  maxWidth?: string;
  disabled?: boolean;
}

export interface ContentGridProps {
  items: ContentCardProps[];
  isLoading?: boolean;
  loadingCount?: number;
  className?: string;
}

export interface InfiniteScrollPageData {
  count?: number;
  [key: string]: unknown;
}

export interface InfiniteScrollContentProps<TPage extends InfiniteScrollPageData = InfiniteScrollPageData> {
  items: ContentCardProps[];
  isLoading?: boolean;
  loadingCount?: number;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  onLoadMore: () => void;
  infiniteData?: {
    pages?: TPage[];
  };
  loadedCountText?: (loaded: number, total: number) => string;
  loadingText?: string;
  loadMoreText?: string;
  allLoadedText?: string;
  error?: Error | null;
  onRetry?: () => void;
  gridClassName?: string;
  buttonClassName?: string;
}
