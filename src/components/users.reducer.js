import Data from '../resources/data.json';

const initialState = Data;

// debugger;
const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default usersReducer;