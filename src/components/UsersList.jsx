import React from 'react';
import Pagination from './Pagination';
import User from './User';
import Search from './Search';
import { filteredUsers, filterTextSelector } from "./users.selectors";
import * as usersActions from "./users.actions";
import { page } from './pages.actions';
import { currentPageState } from './page.state';
import { connect } from "react-redux";


const UsersList = ({ currentPage, usersList, page, filterText, textInputFromFilter }) => {

  let itemsPerPage = 10;

  const goPrev = () => {
    page(currentPage - 1);
  };

  const goNext = () => {
    page(currentPage + 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const usersToDisplay = usersList.slice(startIndex, endIndex);
  // debugger;
  return (
    <div>
      <Search
        filterText={filterText}
        onChange={textInputFromFilter}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        endIndex={endIndex}
        goNext={goNext}
        goPrev={goPrev}
      />
      <ul className="users">
        {usersToDisplay.map((user) => {
          const userNumber = usersList.indexOf(user);
          const randomId = Math.round(Math.random() * 100000000);
          return (
            <User key={randomId} {...user} >
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
  page,
  textInputFromFilter: usersActions.textInputFromFilter,
}

const mapState = state => {
  return {
    usersList: filteredUsers(state),
    filterText: filterTextSelector(state),
    currentPage: currentPageState(state),
  }
}


const ConnectedUsers = connect(mapState, mapDispatch)(UsersList);

export default ConnectedUsers;