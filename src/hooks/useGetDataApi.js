import { useEffect, useReducer } from 'react'
import { request } from '../utils/request'
import { dataFetchReducer } from '../store/reducer'
import { 
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../store/actions' 

 
const useGetDataApi = (url, initialData) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  })
 
  useEffect(() => {
    const fetchData = async () => {
        dispatch({ type: FETCH_INIT })
        try {
            const result = await request.get(url)
            dispatch({ type: FETCH_SUCCESS, payload: result.data })
        } catch (error) {
            dispatch({ type: FETCH_FAILURE })
        }
    }
    fetchData()
    }, [url])
 
  return state
}
 
export default useGetDataApi