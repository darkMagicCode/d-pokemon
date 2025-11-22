import type { ReactNode } from "react";

export interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  icon?: ReactNode;
  color?: string;
}

export const MetricCard = ({ label, value, unit, icon, color }: MetricCardProps) => {
  return (
    <div 
      className="rounded-lg border bg-card text-card-foreground p-4 text-center"
      style={color ? { borderColor: color } : undefined}
    >
      {icon && <div className="flex justify-center mb-2">{icon}</div>}
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-lg font-semibold" style={color ? { color } : undefined}>
        {value} {unit}
      </p>
    </div>
  );
};

