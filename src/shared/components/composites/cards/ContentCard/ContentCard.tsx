import { Card, CardContent } from "@/shared/components/atoms";
import type { ContentCardProps } from "@/shared/types";

export const ContentCard = ({
  title,
  subtitle,
  image,
  metadata,
  onClick,
  ariaLabel,
  maxWidth,
  disabled,
}: ContentCardProps) => {
  return (
    <Card
      onClick={onClick}
      aria-label={ariaLabel || `View details for ${title}`}
      maxWidth={maxWidth || "max-w-[280px]"}
      disabled={disabled}
      clickable={true}
    >
      <CardContent className="p-4 space-y-2">
        <div className="w-full h-[180px] flex items-center justify-center bg-muted rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

        <h3 className="text-center font-medium capitalize truncate">
          {title}
        </h3>

        {subtitle && (
          <p className="text-center text-sm text-muted-foreground truncate">
            {subtitle}
          </p>
        )}

        {metadata && (
          <p className="text-center text-xs text-muted-foreground">
            {metadata}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

