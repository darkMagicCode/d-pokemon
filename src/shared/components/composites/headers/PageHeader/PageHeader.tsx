import type { PageHeaderProps } from "@/shared/types";

export const PageHeader = ({
  title,
  description,
  icon: Icon,
  iconColor,
  actions,
  className,
}: PageHeaderProps) => {
  return (
    <div className={className || "text-center pt-6 space-y-2"}>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
          {Icon && <Icon className={iconColor ? "h-6 w-6" : "h-6 w-6"} />}
          <span>{title}</span>
        </h1>
        {actions && <div className="flex items-center gap-2">{actions}</div>}
      </div>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  );
};

