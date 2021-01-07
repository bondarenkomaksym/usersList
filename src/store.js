import { createStore } from "redux";
import usersReducer from './components/users.reducer';


const store = createStore(usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;