import React from "react";
import * as usersActions from "./users.actions";
import { connect } from "react-redux";

const Search = ({ textInputFromFilter }) => {
  return (
    <div className="filter">
      <input type="text"
        className="filter__input"
        placeholder="Search"
        onChange={(event) => textInputFromFilter(event.target.value)} />
    </div>
  )
}

const mapDispatch = {
  textInputFromFilter: usersActions.textInputFromFilter,
}

const ConnectedSearch = connect(null, mapDispatch)(Search);

export default ConnectedSearch;