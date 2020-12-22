export const FILTER_USER = "USERS/FILTER_USER";
export const SORT_USERNAME = "USERS/SORT_USERNAME";
export const SORT_USERVIEWS = "USERS/SORT_USERVIEWS";


export const textInputFromFilter = textFromInput => {
  return {
    type: FILTER_USER,
    payload: {
      textFromInput
    }
  }
}

export const sortByName = () => {
  return {
    type: SORT_USERNAME,
  }
}

export const sortByViews = () => {
  return {
    type: SORT_USERVIEWS,
  }
}