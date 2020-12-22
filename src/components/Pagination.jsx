import React from 'react';
import { filteredUsers } from "./users.selectors";
import { connect } from "react-redux";
import users from '../resources/data.json';

const Pagination = ({ setCurrentPage, currentPage, usersList, itemsPerPage, endIndex, startIndex }) => {

  let isPrevPageAvaible = false;
  let isNextPageAvaible = false;

  const rest = endIndex % users.length;
  const lastUser = rest === endIndex ? 0 : rest;

  const totalPages = Math.ceil(usersList.length / itemsPerPage);

  currentPage === 0 ? isPrevPageAvaible = true : false;
  currentPage === totalPages - 1 ? isNextPageAvaible = true : false;
  usersList.length === 0 ? isPrevPageAvaible = true : null;
  usersList.length === 0 ? isNextPageAvaible = true : null;

  return (
    <div className="pagination">
      <button className="btn" onClick={() => setCurrentPage(page => page - 1)} disabled={isPrevPageAvaible}>
        {isPrevPageAvaible ? "" : <i className="fas fa-chevron-left"></i>}
      </button>
      <div className="pagination__page">{startIndex + 1} - {endIndex - lastUser}</div>
      <button className="btn" onClick={() => setCurrentPage(page => page + 1)} disabled={isNextPageAvaible}>
        {isNextPageAvaible ? "" : <i className="fas fa-chevron-right"></i>}
      </button>
    </div>
  )
};


const mapState = state => {
  return {
    usersList: filteredUsers(state),
  }
}

const ConnectedPagination = connect(mapState, null)(Pagination);

export default ConnectedPagination;