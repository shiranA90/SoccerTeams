import {
    FETCH_INIT,
    FETCH_SUCCESS,
    FETCH_FAILURE
} from './actions'

export const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case FETCH_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: action.payload,
      }
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      throw new Error('Unexpected action')
  }
}