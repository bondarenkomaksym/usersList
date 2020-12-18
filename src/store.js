import { createStore, combineReducers } from "redux";
import usersReducer from './components/users.reducer';
import { currentPageReducer } from './components/pages.reducer';

const reducer = combineReducers({
  currentPage: currentPageReducer,
  users: usersReducer,
})

// function saveToLocalStorage(state) {
//   // debugger;
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem("persistantState", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   // debugger;
//   try {
//     const serialisedState = localStorage.getItem("persistantState");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// const store = createStore(reducer,
//   loadFromLocalStorage(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;