import type { PageContainerProps } from "@/shared/types";

export const PageContainer = ({
  children,
  className = "space-y-6 min-h-screen",
}: PageContainerProps) => {
  return <div className={className}>{children}</div>;
};

