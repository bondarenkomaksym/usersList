import React, { useState } from 'react';
import Pagination from './Pagination';
import User from './User';
import Search from './Search';
import Sort from './Sort';
import { filteredUsers } from "./users.selectors";
import { connect } from "react-redux";


const UsersList = ({ usersList }) => {


  let itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const usersToDisplay = usersList.slice(startIndex, endIndex);

  return (
    <div className="main">
      <div className="first">
        <Search
          setCurrentPage={setCurrentPage}
        />
        <Sort />
        <div className="users">
          <div className="users__invisible">
            {usersToDisplay.map((user) => {
              const userNumber = usersList.indexOf(user);
              const randomId = Math.round(Math.random() * 100000000);
              return (
                <User key={randomId} {...user} >
                  {userNumber + 1}
                </User>
              )
            })}
          </div>
        </div>
      </div>
      <div className="second">
        <Pagination
          itemsPerPage={itemsPerPage}
          startIndex={startIndex}
          endIndex={endIndex}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>

  );
}


const mapState = state => {
  return {
    usersList: filteredUsers(state),
  }
}


const ConnectedUsers = connect(mapState, null)(UsersList);

export default ConnectedUsers;