import { Badge, Separator } from "@/shared/components/atoms";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import type { FooterProps } from "@/shared/types";

export const Footer = ({ backgroundColor }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t"
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <div className="container py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>© {currentYear} Ayman Nawwar</span>
            <Separator orientation="vertical" className="h-3" />
            <Badge variant="secondary" className="text-xs">
              Senior Frontend Engineer Task
            </Badge>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <a
              href="https://pokeapi.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              <span>PokéAPI</span>
            </a>
            <Separator orientation="vertical" className="h-3" />
            <a
              href="https://www.linkedin.com/in/ayman-nawwar-573606246/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-3 w-3" />
              <span>LinkedIn</span>
            </a>
            <Separator orientation="vertical" className="h-3" />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-3 w-3" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

