import type { ReactNode } from "react";
import { Card, CardContent } from "@/shared/components/atoms";
import { BackButton, ImageContainer, ContentSection, MetricCard, StatBar, DetailHeader } from "@/shared/components/composites";
import { DetailSkeleton } from "@/shared/loading";
import { ErrorDisplay } from "@/shared/error";

export interface DetailPageImage {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export interface DetailPageMetric {
  label: string;
  value: string | number;
  unit?: string;
}

export interface DetailPageStat {
  label: string;
  value: number;
  maxValue: number;
  gradient?: string;
}

export interface DetailPageSection {
  title: string;
  content: ReactNode;
  spacing?: "tight" | "normal" | "relaxed";
}

export interface DetailPageProps<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
  title: string | ((data: T) => string);
  metadata?: string | ReactNode | ((data: T) => string | ReactNode);
  headerGradient?: string;
  image?: DetailPageImage | ((data: T) => DetailPageImage);
  badges?: ReactNode | ((data: T) => ReactNode);
  metrics?: DetailPageMetric[] | ((data: T) => DetailPageMetric[]);
  sections?: DetailPageSection[] | ((data: T) => DetailPageSection[]);
  stats?: DetailPageStat[] | ((data: T) => DetailPageStat[]);
  statsTitle?: string;
  errorTitle?: string;
  errorMessage?: string | ((error: Error) => string);
  notFoundTitle?: string;
  notFoundMessage?: string | ((data: T | null) => string);
  onRetry?: () => void;
  onBack?: () => void;
  backButtonLabel?: string;
  containerClassName?: string;
  cardClassName?: string;
}

export const DetailPage = <T,>({
  data,
  isLoading,
  error,
  title,
  metadata,
  headerGradient,
  image,
  badges,
  metrics,
  sections,
  stats,
  statsTitle = "Stats",
  errorTitle = "Error",
  errorMessage,
  notFoundTitle = "Not Found",
  notFoundMessage,
  onRetry,
  onBack,
  backButtonLabel = "Back",
  containerClassName = "",
  cardClassName = "",
}: DetailPageProps<T>) => {
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <DetailSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorDisplay
        title={errorTitle}
        message={typeof errorMessage === "function" ? errorMessage(error) : errorMessage || error.message}
        onRetry={onRetry}
        onBack={onBack}
      />
    );
  }

  if (!data) {
    return (
      <ErrorDisplay
        title={notFoundTitle}
        message={typeof notFoundMessage === "function" ? notFoundMessage(null) : notFoundMessage || "No data available"}
        onRetry={onRetry}
        onBack={onBack}
      />
    );
  }

  const resolvedTitle = typeof title === "function" ? title(data) : title;
  const resolvedMetadata = typeof metadata === "function" ? metadata(data) : metadata;
  const resolvedImage = typeof image === "function" ? image(data) : image;
  const resolvedBadges = typeof badges === "function" ? badges(data) : badges;
  const resolvedMetrics = typeof metrics === "function" ? metrics(data) : metrics;
  const resolvedSections = typeof sections === "function" ? sections(data) : sections;
  const resolvedStats = typeof stats === "function" ? stats(data) : stats;

  return (
    <div className={`space-y-6 p-4 min-h-screen bg-muted/30 ${containerClassName}`}>
      {onBack && <BackButton onBack={onBack} label={backButtonLabel} />}

      <Card className={`max-w-5xl mx-auto pt-0 pb-6 gap-0 ${cardClassName}`}>
        <DetailHeader
          title={resolvedTitle}
          metadata={resolvedMetadata}
          gradient={headerGradient}
        />

        <CardContent className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {resolvedImage && (
                <ImageContainer
                  src={resolvedImage.src}
                  alt={resolvedImage.alt}
                  fallbackSrc={resolvedImage.fallbackSrc}
                  size="lg"
                />
              )}

              {resolvedBadges && (
                <div className="flex justify-center gap-2 flex-wrap">
                  {resolvedBadges}
                </div>
              )}

              {resolvedMetrics && resolvedMetrics.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {resolvedMetrics.map((metric, index) => (
                    <MetricCard
                      key={index}
                      label={metric.label}
                      value={metric.value}
                      unit={metric.unit}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              {resolvedStats && resolvedStats.length > 0 && (
                <ContentSection title={statsTitle} spacing="relaxed">
                  <div className="space-y-2">
                    {resolvedStats.map((stat, index) => (
                      <StatBar
                        key={index}
                        label={stat.label}
                        value={stat.value}
                        maxValue={stat.maxValue}
                        gradient={stat.gradient}
                      />
                    ))}
                  </div>
                </ContentSection>
              )}

              {resolvedSections && resolvedSections.length > 0 && resolvedSections.map((section, index) => (
                <ContentSection
                  key={index}
                  title={section.title}
                  spacing={section.spacing}
                >
                  {section.content}
                </ContentSection>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

