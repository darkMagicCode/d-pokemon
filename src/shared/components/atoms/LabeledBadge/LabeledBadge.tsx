import { Badge } from "../Badge";
import type { VariantProps } from "class-variance-authority";
import { badgeVariants } from "../Badge";

export interface LabeledBadgeProps extends VariantProps<typeof badgeVariants> {
  label: string;
  suffix?: string;
  formatLabel?: (label: string) => string;
  className?: string;
}

export const LabeledBadge = ({
  label,
  suffix,
  formatLabel,
  className = "",
  variant,
}: LabeledBadgeProps) => {
  const formattedLabel = formatLabel ? formatLabel(label) : label;

  return (
    <Badge className={`capitalize ${className}`} variant={variant}>
      {formattedLabel}
      {suffix}
    </Badge>
  );
};

