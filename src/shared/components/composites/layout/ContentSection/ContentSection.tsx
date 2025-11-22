import type { ReactNode } from "react";

export interface ContentSectionProps {
  title: string;
  children: ReactNode;
  spacing?: "tight" | "normal" | "relaxed";
  titleClassName?: string;
  className?: string;
}

const spacingClasses = {
  tight: "space-y-1",
  normal: "space-y-2",
  relaxed: "space-y-3",
};

export const ContentSection = ({
  title,
  children,
  spacing = "normal",
  titleClassName = "",
  className = "",
}: ContentSectionProps) => {
  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      <h3 className={`font-semibold text-lg ${titleClassName}`}>
        {title}
      </h3>
      {children}
    </div>
  );
};

