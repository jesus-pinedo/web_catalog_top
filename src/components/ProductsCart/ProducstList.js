import React from 'react'
import Product from '../ProductsCart/Product';
import './index.css';
const ShoppingCartProductList = props => {

	const { products, handleChange } = props
	return (
		<div >
			{
				products.map(product => (
					<Product key={product.id} handleChange={handleChange}
						product={product}
					/>
				))
			}
		</div>
	)
}

export default ShoppingCartProductList;