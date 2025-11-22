import { ArrowLeft } from "lucide-react";
import { Button } from "@/shared/components/atoms";

export interface BackButtonProps {
  onBack: () => void;
  label?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary";
}

export const BackButton = ({
  onBack,
  label = "Back",
  className = "",
  variant = "outline",
}: BackButtonProps) => {
  return (
    <div className={className}>
      <Button onClick={onBack} variant={variant}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        {label}
      </Button>
    </div>
  );
};

