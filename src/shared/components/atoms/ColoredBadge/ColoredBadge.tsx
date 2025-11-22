import { Badge } from "../Badge";

export interface ColoredBadgeProps {
  label: string;
  colorMap?: Record<string, string>;
  colorKey?: string;
  className?: string;
  defaultColor?: string;
}

export const ColoredBadge = ({
  label,
  colorMap,
  colorKey,
  className = "",
  defaultColor = "bg-gray-400",
}: ColoredBadgeProps) => {
  const key = colorKey || label.toLowerCase();
  const colorClass = colorMap?.[key] || defaultColor;

  return (
    <Badge className={`${colorClass} text-white capitalize ${className}`}>
      {label}
    </Badge>
  );
};

