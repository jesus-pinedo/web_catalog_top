

export const quantityProducts = state => {
	const shoppingCart = state.shoppingCartReducer.shoppingCart
	if (Object.keys(shoppingCart).length > 1) {
		const products = shoppingCart.products
		let total = 0
		products.forEach(product => {
			total+= parseInt(product.quantity)
		})
		return total
	}
}