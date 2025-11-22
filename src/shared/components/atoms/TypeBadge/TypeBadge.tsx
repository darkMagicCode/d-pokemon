import { ColoredBadge } from "../ColoredBadge";

export interface TypeBadgeProps {
  type: string;
  colorMap: Record<string, string>;
  defaultColor?: string;
  className?: string;
}

export const TypeBadge = ({
  type,
  colorMap,
  defaultColor = "bg-gray-400",
  className,
}: TypeBadgeProps) => {
  return (
    <ColoredBadge
      label={type}
      colorMap={colorMap}
      colorKey={type.toLowerCase()}
      defaultColor={defaultColor}
      className={className}
    />
  );
};

