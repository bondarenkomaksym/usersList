export const PAGE = 'CURRENT_PAGE/PAGE';

export const page = currentPage => {
  return {
    type: PAGE,
    payload: {
      currentPage
    }
  }
}