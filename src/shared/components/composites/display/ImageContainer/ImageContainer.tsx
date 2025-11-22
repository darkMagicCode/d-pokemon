export interface ImageContainerProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  fallbackSrc?: string;
}

const sizeClasses = {
  sm: "w-32 h-32",
  md: "w-48 h-48",
  lg: "w-64 h-64",
  xl: "w-80 h-80",
};

export const ImageContainer = ({
  src,
  alt,
  size = "lg",
  className = "",
  fallbackSrc,
}: ImageContainerProps) => {
  const displaySrc = src || fallbackSrc;

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} rounded-lg bg-muted flex items-center justify-center ${className}`}>
        {displaySrc && (
          <img
            src={displaySrc}
            alt={alt}
            className="w-full h-full object-contain p-4"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

