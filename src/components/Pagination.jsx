import React from 'react';
import { usersState, currentPageState } from './page.state';
import { connect } from "react-redux";

const Pagination = ({ goPrev, goNext, currentPage, users, itemsPerPage, endIndex, startIndex }) => {

  let isPrevPageAvaible = false;
  let isNextPageAvaible = false;

  const rest = endIndex % users.length;
  const lastUser = rest === endIndex ? 0 : rest;

  const totalPages = Math.ceil(users.length / itemsPerPage);

  currentPage === 0 ? isPrevPageAvaible = true : false;
  currentPage === totalPages - 1 ? isNextPageAvaible = true : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvaible}>
        {isPrevPageAvaible ? "" : "←"}
      </button>
      <span className="pagination__page">{startIndex + 1} - {endIndex - lastUser}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvaible}>
        {isNextPageAvaible ? "" : "→"}
      </button>
    </div>
  )
};


const mapState = state => {
  return {
    users: usersState(state),
    currentPage: currentPageState(state),
  }
}

const ConnectedPagination = connect(mapState, null)(Pagination);

export default ConnectedPagination;