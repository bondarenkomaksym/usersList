export const FILTER_USER = "USERS/FILTER_USER";


export const textInputFromFilter = textFromInput => {
  return {
    type: FILTER_USER,
    payload: {
      textFromInput
    }
  }
}