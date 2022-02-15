import Api  from '../api'
export const GET_SHOPPING_CART_STARTED= 'GET_SHOPPING_CART_STARTED'
export const GET_SHOPPING_CART_SUCCESS = 'GET_SHOPPING_CART_SUCCESS'
export const GET_SHOPPING_CART_FAILED = 'GET_SHOPPING_CART_FAILED'

export const getShoppingCartSuccess = response => ({
  type: GET_SHOPPING_CART_SUCCESS,
  payload: response,
})

export const getShoppingCartFiled = response => ({
  type: GET_SHOPPING_CART_FAILED,
  payload: response,
})

export const fetchShoppinCart = (shoppingCartId) => async (dispatch) => {
  const api = new Api()
  try {
    const response = await api.getShoppingCart(shoppingCartId)
    dispatch(getShoppingCartSuccess(response.data))
  } catch (error) {
    dispatch(getShoppingCartFiled(error))
  }
}


export const updateShoppinCart = (data) => async (dispatch) => {
  const api = new Api()
  try {
    const response = await api.updateOrder(data)
    dispatch(getShoppingCartSuccess(response.data))
  } catch (error) {
    dispatch(getShoppingCartSuccess(error))
  }
}

export const updateShippingDate = (data) => async (dispatch) => {
  const api = new Api()
  try {
    const response = await api.updateShippingDate(data)
    dispatch(getShoppingCartSuccess(response.data))
  } catch (error) {
    dispatch(getShoppingCartSuccess(error))
  }
}


export const updatePaymentMethod = (data) => async (dispatch) => {

  const api = new Api()
  try {
    const response = await api.updatePaymentMethod(data)
    dispatch(getShoppingCartSuccess(response.data))
  } catch (error) {
    dispatch(getShoppingCartSuccess(error))
  }
}