import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { createKeyboardClickHandler } from "@/shared/lib/accessibility";

export interface CardProps extends React.ComponentProps<"div"> {
  onClick?: () => void;
  disabled?: boolean;
  maxWidth?: string;
  clickable?: boolean;
}

function Card({ 
  className, 
  onClick,
  disabled = false,
  maxWidth,
  clickable,
  role,
  tabIndex,
  onKeyDown,
  "aria-label": ariaLabel,
  "aria-disabled": ariaDisabled,
  ...props 
}: CardProps) {
  const isClickable = clickable !== undefined ? clickable : Boolean(onClick && !disabled);
  
  const handleKeyDown = React.useMemo(() => {
    if (onKeyDown) return onKeyDown;
    if (isClickable && onClick) {
      return createKeyboardClickHandler(onClick);
    }
    return undefined;
  }, [onClick, onKeyDown, isClickable]);

  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        isClickable && "cursor-pointer hover:shadow-md transition-shadow mx-auto w-full",
        maxWidth,
        disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      onClick={isClickable && !disabled ? onClick : undefined}
      role={role || (isClickable ? "button" : undefined)}
      tabIndex={tabIndex !== undefined ? tabIndex : (isClickable && !disabled ? 0 : undefined)}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-disabled={ariaDisabled !== undefined ? ariaDisabled : (disabled ? true : undefined)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};

