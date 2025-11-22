import { Button } from "@/shared/components/atoms";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PAGINATION_LABELS } from "@/shared/constants";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  labels?: {
    previousPage?: string;
    nextPage?: string;
    page?: (page: number) => string;
    ellipsis?: string;
  };
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  labels = PAGINATION_LABELS,
}: PaginationProps) => {
  const {
    previousPage = PAGINATION_LABELS.previousPage,
    nextPage = PAGINATION_LABELS.nextPage,
    page = PAGINATION_LABELS.page,
    ellipsis = PAGINATION_LABELS.ellipsis,
  } = labels;

  const getPageNumbers = () => {
    const pages: number[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={className || "flex justify-center items-center gap-2 p-4 flex-wrap"}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label={previousPage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {pageNumbers[0] > 1 && (
        <>
          <Button
            variant={currentPage === 1 ? "default" : "outline"}
            onClick={() => onPageChange(1)}
            aria-label={page(1)}
            aria-current={currentPage === 1 ? "page" : undefined}
          >
            1
          </Button>
          {pageNumbers[0] > 2 && (
            <span className="px-2 text-muted-foreground">{ellipsis}</span>
          )}
        </>
      )}

      {pageNumbers.map((p) => (
        <Button
          key={p}
          variant={currentPage === p ? "default" : "outline"}
          onClick={() => onPageChange(p)}
          aria-label={page(p)}
          aria-current={currentPage === p ? "page" : undefined}
        >
          {p}
        </Button>
      ))}

      {pageNumbers[pageNumbers.length - 1] < totalPages && (
        <>
          {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
            <span className="px-2 text-muted-foreground">{ellipsis}</span>
          )}
          <Button
            variant={currentPage === totalPages ? "default" : "outline"}
            onClick={() => onPageChange(totalPages)}
            aria-label={page(totalPages)}
            aria-current={currentPage === totalPages ? "page" : undefined}
          >
            {totalPages}
          </Button>
        </>
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label={nextPage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

