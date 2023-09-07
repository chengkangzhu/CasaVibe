import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const pageRange = 2; // Number of pages to show before and after the current page
    const ellipsis = <span>...</span>;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - pageRange && i <= currentPage + pageRange)) {
        buttons.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={
              i === currentPage
                ? "pagination_num shape_outline_active"
                : "pagination_num"
            }
          >
            {i}
          </button>
        );
      } else if (buttons[buttons.length - 1] !== ellipsis) {
        buttons.push(ellipsis);
      }
    }

    return buttons;
  };

  return (
    <div className="pagination h7 md">
      <MdOutlineKeyboardArrowLeft
        onClick={() => handlePageChange(currentPage - 1)}
        className={currentPage === 1 ? "hidden icon" : "icon"}
        size={24}
      />
      {renderPaginationButtons()}
      <MdOutlineKeyboardArrowRight
        onClick={() => handlePageChange(currentPage + 1)}
        className={currentPage === totalPages ? "hidden icon" : "icon"}
        size={24}
      />
    </div>
  );
};

export default Pagination;
