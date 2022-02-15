import React, { Fragment, useEffect } from 'react'
import { useModal } from 'react-modal-hook'
import PropTypes from 'prop-types'
import CustomModal from '../../../CustomModal'
import ProductsList from '../Cart/ProductsCart/ProducstList'




const Cart = (props) => {
  const {
    shoppingCart, quantityProducts
  } = props

const { products = []} = shoppingCart
  return (
		<div className="container pt-4">
		<h5>Productos</h5> 	
			<ProductsList products={products} handleChange={7} />
			</div>
  )
}

Cart.propTypes = {
  paymentOptionSelected: PropTypes.string.isRequired,
  paymentOptionHandler: PropTypes.func.isRequired,


}


export default Cart
