import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsOnPage: number;
  onPageChange: (page: number) => void;
};

const GamePagination = ({ currentPage, totalPages, totalItems, itemsOnPage, onPageChange }: Props) => {
  if (totalPages <= 1) return null;

  const start = (currentPage - 1) * Math.ceil(totalItems / totalPages) + 1;
  const end = start + itemsOnPage - 1;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const btnBase = "h-8 w-8 rounded-full text-xs font-bold transition-colors flex items-center justify-center cursor-pointer";
  const btnActive = "bg-blue-600 text-white shadow-sm shadow-blue-500/30";
  const btnInactive = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700";
  const btnDisabled = "opacity-40 cursor-not-allowed";

  return (
    <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100 dark:border-gray-700">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-700 dark:text-gray-300">{start}–{end}</span> of{" "}
        <span className="font-semibold text-gray-700 dark:text-gray-300">{totalItems}</span> games
      </p>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${btnBase} ${currentPage === 1 ? btnDisabled : btnInactive}`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${btnBase} ${currentPage === page ? btnActive : btnInactive}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${btnBase} ${currentPage === totalPages ? btnDisabled : btnInactive}`}
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default GamePagination;
