import { CardHeader, CardTitle } from "@/shared/components/atoms";
import type { ReactNode } from "react";

export interface DetailHeaderProps {
  title: string;
  metadata?: string | ReactNode;
  gradient?: string;
  titleClassName?: string;
  metadataClassName?: string;
  className?: string;
}

export const DetailHeader = ({
  title,
  metadata,
  gradient = "from-fuchsia-500 to-pink-500",
  titleClassName = "",
  metadataClassName = "",
  className = "",
}: DetailHeaderProps) => {
  return (
    <CardHeader className="p-0">
      <div className={`rounded-t-xl bg-gradient-to-r ${gradient} text-white px-6 py-6 ${className}`}>
        <CardTitle className={`text-2xl md:text-3xl flex items-center justify-between ${titleClassName}`}>
          <span className="capitalize">{title}</span>
          {metadata && (
            <span className={`text-white/80 text-base ${metadataClassName}`}>
              {metadata}
            </span>
          )}
        </CardTitle>
      </div>
    </CardHeader>
  );
};

