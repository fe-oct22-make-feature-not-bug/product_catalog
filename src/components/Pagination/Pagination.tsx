import cn from "classnames";
import React, { memo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Pagination.scss";

interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (n: number) => void;
}

export const Pagination: React.FC<Props> = memo(
  ({ currentPage, totalPages, setCurrentPage }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      setCurrentPage(+(searchParams.get("page") || 1));
    }, [searchParams]);

    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    const setPageNumber = (pageNumber: number) => {
      setSearchParams({ page: pageNumber.toString() });
    };

    const handlePrevClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      if (currentPage <= 1) {
        return;
      }

      setPageNumber(currentPage - 1);
    };

    const handleNextClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();

      if (currentPage >= totalPages) {
        return;
      }

      setPageNumber(currentPage + 1);
    };

    const handleNumberClick = (
      event: React.MouseEvent<HTMLAnchorElement>,
      newPage: number
    ) => {
      event.preventDefault();

      setPageNumber(newPage);
    };

    return (
      <>
        <ul className="pagination">
          <li>
            <Link
              to={`?page=${currentPage - 1}`}
              className={cn("pagination__link", "pagination__link_prev", {
                pagination__link_disabled: currentPage === 1,
              })}
              onClick={handlePrevClick}
              aria-label="Previous"
            ></Link>
          </li>

          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <Link
                to={`?page=${currentPage}`}
                className={cn("pagination__link", {
                  pagination__link_active: pageNumber === currentPage,
                })}
                onClick={(event) => handleNumberClick(event, pageNumber)}
              >
                {pageNumber}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to={`?page=${currentPage + 1}`}
              className={cn("pagination__link", "pagination__link_next", {
                pagination__link_disabled: currentPage === totalPages,
              })}
              onClick={handleNextClick}
              aria-label="Next"
            ></Link>
          </li>
        </ul>
      </>
    );
  }
);
