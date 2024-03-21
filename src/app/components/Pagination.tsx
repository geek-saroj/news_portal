import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  activePage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  activePage,
  onPageChange,
}: PaginationProps): JSX.Element => {
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);

  const renderPaginationButtons = (): JSX.Element[] => {
    const buttons: JSX.Element[] = [];

    let startPage: number = Math.max(1, activePage - 2);
    let endPage: number = Math.min(totalPages, activePage + 2);

    if (endPage - startPage + 1 < 5) {
      if (activePage < 3) {
        endPage = Math.min(5, totalPages);
      } else {
        startPage = Math.max(1, totalPages - 4);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <li key={i}>
          <button
            className={`px-3 py-1 ${
              activePage === i
                ? "bg-green-500 hover:bg-green-900 text-white"
                : "bg-gray-200 text-black"
            } rounded-lg hover:bg-gray-300`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        </li>
      );
    }
    return buttons;
  };

  return <ul className="flex justify-center mt-4">{renderPaginationButtons()}</ul>;
};

export default Pagination;
