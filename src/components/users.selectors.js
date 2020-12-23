import { createSelector } from 'reselect';

export const usersListSelector = state => {
  return state.users.usersList;
};

export const filterTextSelector = state => {
  return state.users.filterText;
};

export const filteredUsers = createSelector(
  [usersListSelector, filterTextSelector],
  (usersList, filterText) => {
    return usersList.filter(user => {
      return user.name.toLowerCase().includes(filterText.toLowerCase());
    });
  },
);