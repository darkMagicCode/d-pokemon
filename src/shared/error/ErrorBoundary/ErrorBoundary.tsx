import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";
import { ErrorDisplay } from "../ErrorDisplay";
import logger from "@/shared/services/logger";
import { isDevelopment } from "@/shared/services/apiConfig";
import type { RootErrorBoundaryProps } from "@/shared/types";

export const ErrorBoundary = ({
  homePath,
  onGoHome,
  onGoBack,
  Layout,
}: RootErrorBoundaryProps & { Layout?: React.ComponentType<{ children: React.ReactNode }> }) => {
  const error = useRouteError();
  const navigate = useNavigate();

  logger.error("Route error caught:", error);

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      navigate(-1);
    }
  };

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else if (homePath) {
      navigate(homePath);
    } else {
      navigate(-1);
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const content = () => {
    if (isRouteErrorResponse(error)) {
      const errorTitle = error.status.toString();
      const errorMessage =
        error.status === 404
          ? "Page Not Found"
          : error.status === 401
            ? "Unauthorized"
            : error.status === 403
              ? "Forbidden"
              : error.status === 503
                ? "Service Unavailable"
                : "Something went wrong";
      const errorDescription =
        error.statusText || error.data?.message || "An unexpected error occurred";

      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <ErrorDisplay
            title={`${errorTitle} - ${errorMessage}`}
            message={errorDescription}
            onRetry={handleRefresh}
            onBack={handleGoBack}
            onGoHome={onGoHome || homePath ? handleGoHome : undefined}
            homePath={homePath}
            showGoBack={true}
            showGoHome={!!(onGoHome || homePath)}
          />
        </div>
      );
    }

    if (error instanceof Error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <ErrorDisplay
            title="Application Error"
            message={error.message || "An unexpected error occurred"}
            onRetry={handleRefresh}
            onBack={handleGoBack}
            onGoHome={onGoHome || homePath ? handleGoHome : undefined}
            homePath={homePath}
            showGoBack={true}
            showGoHome={!!(onGoHome || homePath)}
          />
          {isDevelopment && error.stack && (
            <div className="mt-4 max-w-md w-full">
              <pre className="text-left text-xs bg-muted p-4 rounded-lg overflow-auto max-h-40">
                {error.stack}
              </pre>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <ErrorDisplay
          title="Unknown Error"
          message="Something unexpected happened. Please try again."
          onRetry={handleRefresh}
          onBack={handleGoBack}
          onGoHome={onGoHome || homePath ? handleGoHome : undefined}
          homePath={homePath}
          showGoBack={true}
          showGoHome={!!(onGoHome || homePath)}
        />
      </div>
    );
  };

  if (Layout) {
    return <Layout>{content()}</Layout>;
  }

  return content();
};

export const RootErrorBoundary = ErrorBoundary;

