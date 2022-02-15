import Api  from '../api'
export const GET_PRODUCTS_STARTED= 'GET_PRODUCTS_STARTED'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'



export const getProductsSuccess = response => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: response,
})

export const getProductsFiled = response => ({
  type: GET_PRODUCTS_FAILED,
  payload: response,
})

export const fecthProducts = () => async (dispatch) => {
  const api = new Api()
  try {
    const response = await api.getProducts()
    dispatch(getProductsSuccess(response.data))
  } catch (error) {
    dispatch(getProductsFiled(error))
  }
}

