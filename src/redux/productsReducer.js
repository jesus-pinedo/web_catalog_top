
import { GET_PRODUCTS_STARTED, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED } from './actions'


const initState = {
  products: [],
  loading: true, 
  error:false
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, loading: false }
    case GET_PRODUCTS_STARTED:
      return { ...state, loading: true }
    case GET_PRODUCTS_FAILED:
        return { ...state, loading: false, error:true }
    default:
      return state
  }
}
