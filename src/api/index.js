import axios from 'axios';

class Api {

	constructor() {
		 this.url = 'http://localhost:3001'
		//this.url = 'https://test-deply-node.herokuapp.com'
	}
 

	getShoppingCart(shoppingCartId) {
		return axios.get(`${this.url}/shopping-cart/${shoppingCartId}`)
	}

	getOrderPricedByPaymentMethod(shoppingCartId, paymentMethod) {
		return axios.post(`${this.url}/order/price-payment-method`,
		{
			shoppingCartId,
			paymentMethod,
		}).then((response) => response.data)
	}

updateShoppinCart({shoppingCartId, productId, quantity}) {
		return 	axios.post(`${this.url}/shopping-cart/update-product-quantity`,
		{
			shoppingCartId,
			productId,
			quantity
		})
	}

	updateShippingDate({shoppingCartId, shippingGroupId, slotId}) {
		return 	axios.post(`${this.url}/order/update-shipping-group-slot`,
		{
			shoppingCartId,
			shippingGroupId,
			slotId
		})
	}

	updatePaymentMethod({shoppingCartId, paymentMethod}) {
		return 	axios.post(`${this.url}/order/update-payment-method`,
		{
			shoppingCartId,
			paymentMethod
		})
	}
}


export default Api