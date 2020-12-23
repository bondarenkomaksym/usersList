import users from '../resources/data.json';
import { FILTER_USER, SORT_USERNAME, SORT_USERVIEWS } from './users.actions';

const initialState = {
  usersList: users,
  filterText: "",
  isAscendingNames: false,
  isAscendingViews: false,
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_USER:
      return {
        ...state,
        filterText: action.payload.textFromInput,
      };

    case SORT_USERNAME: {
      const copy = JSON.parse(JSON.stringify(state.usersList));
      return {
        ...state,
        isAscendingNames: !state.isAscendingNames,
        usersList: copy.sort((a, b) => {
          const asc = state.isAscendingNames ? 1 : -1;
          return asc * a.name.localeCompare(b.name);
        }),
      };
    }
    case SORT_USERVIEWS: {
      const copy = JSON.parse(JSON.stringify(state.usersList));
      return {
        ...state,
        isAscendingViews: !state.isAscendingViews,
        usersList: copy.sort((a, b) => {
          const asc = state.isAscendingViews ? 1 : -1;
          return asc * a.pageviews.toString().localeCompare(b.pageviews.toString());
        }),
      };
    }

    default:
      return state;
  }
}

export default usersReducer;