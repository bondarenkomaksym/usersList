import React from "react";
import { Provider } from "react-redux";
import UsersList from "./components/UsersList";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>)

}

export default App;