
import { GET_SHOPPING_CART_STARTED, GET_SHOPPING_CART_SUCCESS, GET_SHOPPING_CART_FAILED } from './actions'


const initState = {
  shoppingCart: {},
  loading: true, 
  error:false
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_SHOPPING_CART_SUCCESS:
      return { ...state, shoppingCart: action.payload, loading: false }
    case GET_SHOPPING_CART_STARTED:
      return { ...state, loading: true }
    case GET_SHOPPING_CART_FAILED:
        return { ...state, loading: false, error:true }
    default:
      return state
  }
}
