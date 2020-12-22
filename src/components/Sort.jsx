import React, { useState } from 'react';
import * as usersActions from "./users.actions";
import { connect } from "react-redux";

const Sort = ({ sortByName, sortByViews }) => {

  const [ascnames, setAscNames] = useState(false);
  const [ascviews, setAscViews] = useState(false);

  const name = () => {
    setAscNames(() => !ascnames);
    sortByName();
  }
  const views = () => {
    setAscViews(() => !ascviews);
    sortByViews();
  }

  return (
    <div className="sort">
      <button className="sort__names" onClick={name}>
        По имени
        <i className={`${ascnames ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}`}></i>
      </button>
      <button className="sort__views" onClick={views}>
        По просмотрам
        <i className={`${ascviews ? 'fas fa-chevron-down' : 'fas fa-chevron-up'}`}></i>
      </button>
    </div>
  )
};

const mapDispatch = {
  sortByName: usersActions.sortByName,
  sortByViews: usersActions.sortByViews,
}

const ConnectedSort = connect(null, mapDispatch)(Sort);

export default ConnectedSort;