import { Alert, AlertDescription, AlertTitle, Button } from "@/shared/components/atoms";
import { AlertCircle, ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { ErrorDisplayProps } from "@/shared/types";

export const ErrorDisplay = ({
  title = "Error",
  message = "Something went wrong. Please try again.",
  onRetry,
  onBack,
  onGoHome,
  showGoHome,
  showGoBack = true,
  homePath,
}: ErrorDisplayProps) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    if (onGoHome) {
      onGoHome();
    } else if (homePath) {
      navigate(homePath);
    }
  };

  const handleGoBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  const shouldShowHome = showGoHome !== false && (onGoHome || homePath);

  return (
    <div className="flex justify-center items-center min-h-[200px] p-4">
      <Alert variant="destructive" className="max-w-md">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="mt-2">
          {message}
          <div className="flex flex-col gap-2 mt-4">
            {onRetry && (
              <Button
                variant="outline"
                size="sm"
                onClick={onRetry}
                className="w-full"
              >
                Try Again
              </Button>
            )}
            {(showGoBack || shouldShowHome) && (
              <div className="flex gap-2">
                {showGoBack && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGoBack}
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Go Back
                  </Button>
                )}
                {shouldShowHome && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleGoHome}
                    className="flex-1"
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Button>
                )}
              </div>
            )}
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
};

