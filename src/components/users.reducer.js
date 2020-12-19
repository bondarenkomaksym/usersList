import users from '../resources/data.json';
import { FILTER_USER } from './users.actions';

const initialState = {
  usersList: users,
  filterText: "",
};

// debugger;

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_USER:
      return {
        ...state,
        filterText: action.payload.textFromInput,
      };
    default:
      return state;
  }
}

export default usersReducer;