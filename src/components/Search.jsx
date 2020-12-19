import React from "react";
import * as usersActions from "./users.actions";
import { connect } from "react-redux";

const Search = ({ textInputFromFilter, setCurrentPage }) => {

  const onChange = (event) => {
    textInputFromFilter(event.target.value);
    setCurrentPage(0);
  }

  return (
    <div className="filter">
      <input type="text"
        className="filter__input"
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  )
}

const mapDispatch = {
  textInputFromFilter: usersActions.textInputFromFilter,
}

const ConnectedSearch = connect(null, mapDispatch)(Search);

export default ConnectedSearch;