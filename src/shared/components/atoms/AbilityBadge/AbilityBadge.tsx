import { LabeledBadge } from "../LabeledBadge";

export interface AbilityBadgeProps {
  label: string;
  suffix?: string;
  formatLabel?: (label: string) => string;
  variant?: "default" | "destructive" | "outline" | "secondary";
  className?: string;
}

export const AbilityBadge = ({
  label,
  suffix,
  formatLabel,
  variant = "secondary",
  className = "bg-accent/60 border border-border",
}: AbilityBadgeProps) => {
  return (
    <LabeledBadge
      label={label}
      suffix={suffix}
      formatLabel={formatLabel}
      variant={variant}
      className={className}
    />
  );
};

