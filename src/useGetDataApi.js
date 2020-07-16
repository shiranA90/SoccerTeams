import { useEffect, useReducer } from 'react'
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://api.football-data.org/v2',
    headers: {'X-Auth-Token': '368c20e961244e21a09648f8e83787b6'}
});

const dataFetchReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INIT':
        return {
          ...state,
          isLoading: true,
          isError: false
        };
      case 'FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        throw new Error()
    }
  }

 
const useGetDataApi = (url, initialData) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  })
 
  useEffect(() => {
    const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' })
        try {
            const result = await request.get(url)
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data })
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE' })
        }
    }
    fetchData()
    }, [url])
 
  return state
};
 
export default useGetDataApi