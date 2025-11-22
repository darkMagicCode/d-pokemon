import { useState, useEffect } from "react";

export interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  color?: string;
  gradient?: string;
  showValue?: boolean;
}

export const StatBar = ({
  label,
  value,
  maxValue,
  color,
  gradient,
  showValue = true,
}: StatBarProps) => {
  const percentage = (value / maxValue) * 100;
  const [displayValue, setDisplayValue] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 50);

    const duration = 1000;
    const startValue = 0;
    const endValue = value;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(startValue + (endValue - startValue) * easeOut);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      clearTimeout(timer);
    };
  }, [percentage, value]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1 relative bg-muted/70 rounded-full h-2.5 overflow-hidden">
          <div
            className={`absolute inset-0 h-full rounded-full ${gradient || "bg-primary"}`}
            style={{
              width: `${width}%`,
              backgroundColor: color && !gradient ? color : undefined,
              transition: "width 1s ease-out",
            }}
          />
        </div>
        {showValue && (
          <span className="text-xs font-semibold text-foreground min-w-[2.5rem] text-right tabular-nums">
            {displayValue}
          </span>
        )}
      </div>
    </div>
  );
};

