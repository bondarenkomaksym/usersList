import React from 'react';
import { currentPageState } from './page.state';
import { filteredUsers } from "./users.selectors";
import { connect } from "react-redux";

const Pagination = ({ goPrev, goNext, currentPage, usersList, itemsPerPage, endIndex, startIndex }) => {

  let isPrevPageAvaible = false;
  let isNextPageAvaible = false;

  const rest = endIndex % usersList.length;
  const lastUser = rest === endIndex ? 0 : rest;

  const totalPages = Math.ceil(usersList.length / itemsPerPage);

  currentPage === 0 ? isPrevPageAvaible = true : false;
  currentPage === totalPages - 1 ? isNextPageAvaible = true : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevPageAvaible}>
        {isPrevPageAvaible ? "" : "<"}
      </button>
      <span className="pagination__page">{startIndex + 1} - {endIndex - lastUser}</span>
      <button className="btn" onClick={goNext} disabled={isNextPageAvaible}>
        {isNextPageAvaible ? "" : ">"}
      </button>
    </div>
  )
};


const mapState = state => {
  return {
    usersList: filteredUsers(state),
    currentPage: currentPageState(state),
  }
}

const ConnectedPagination = connect(mapState, null)(Pagination);

export default ConnectedPagination;