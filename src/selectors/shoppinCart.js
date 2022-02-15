

export const quantityProducts = state => {
	const products = state.productsReducer.products
	if (Object.keys(products).length > 1) {

		return products.length
	}
}