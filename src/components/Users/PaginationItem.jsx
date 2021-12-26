import React from 'react'
import s from './Users.module.css'

const PaginationItem = ({ handleChangePage, page, currentPage }) => {
    return (
      <span
        onClick={() => handleChangePage(page)}
        className={page === currentPage ? s.selectedPage : ""}
      >
        {page}
      </span>
    );
  };

  export default PaginationItem