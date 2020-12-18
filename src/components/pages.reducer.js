import { PAGE } from './pages.actions';

export const currentPageReducer = (state = 0, action) => {
  switch (action.type) {
    case PAGE:
      return action.payload.currentPage
    default:
      return state;
  }
}