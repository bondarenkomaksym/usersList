import React from "react";
import * as usersActions from "./users.actions";
import { connect } from "react-redux";

const Search = ({ textInputFromFilter, setCurrentPage }) => {

  const onChange = (event) => {
    event.target.value = event.target.value.match(/[а-яё]+/ig);
    textInputFromFilter(event.target.value);
    setCurrentPage(0);
  }


  return (
    <div className="filter">
      <i className="fas fa-search"></i>
      <input type="text"
        className="filter__input"
        placeholder="Поиск по имени автора"
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