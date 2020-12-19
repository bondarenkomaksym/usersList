import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import User from './User';

import { page } from './pages.actions';
import { usersState, currentPageState } from './page.state';
import { connect } from "react-redux";


const UsersList = ({ currentPage, users, page }) => {

  let itemsPerPage = 10;

  const goPrev = () => {
    page(currentPage - 1);
  };

  const goNext = () => {
    page(currentPage + 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const usersToDisplay = users.slice(startIndex, endIndex);
  // debugger;
  return (
    <div>
      <Pagination
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
        goNext={goNext}
        goPrev={goPrev}
      />
      <ul className="users">
        {usersToDisplay.map((user) => {
          const userNumber = users.indexOf(user);
          const randomId = Math.round(Math.random() * 100000000);
          return (
            <User key={randomId} {...user}>
              {userNumber + 1}
            </User>
          )
        })
        }
      </ul>
    </div>
  );
}


const mapDispatch = {
  page
}

const mapState = state => {
  return {
    users: usersState(state),
    currentPage: currentPageState(state),
  }
}


const ConnectedUsers = connect(mapState, mapDispatch)(UsersList);

export default ConnectedUsers;