import React, {
	useEffect, useState
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Api from '../../../api'
import ProductsList from './Products/ProducstList'
import { updateShoppinCart, fetchShoppinCart, updateShippingDate, updatePaymentMethod } from '../../../redux/actions'
import './index.css'
import axios from 'axios';



const Home = (props) => {
	const shoppingCartId = "s_20k7jhrho"
	const [products, setProducts] = useState(null)
	const { shoppingCart, error, isLoading } = props


	useEffect(() => {
		const { fetchShoppinCart } = props
		if (!shoppingCart.id)
			fetchShoppinCart(shoppingCartId)
	}, [shoppingCart.id, props])



	const updateShoppinCart = (productId, quantity) => {
		const { updateShoppinCart } = props
		updateShoppinCart({ shoppingCartId: shoppingCartId, productId, quantity })
	}

	const fecthProduts = () => {
		const stagingUrl = 'http://localhost:3001'
		axios.get(`${stagingUrl}/product/list/all`)
			.then(res => {
				const response = res.data
				setProducts(response)
			})
	}

	useEffect(() => {
		fecthProduts()
	}, [])


	const renderFetchingOrder = () => {
		return (
			<section className="contenedor mt-5 pt-4 ">
				<div className="row justify-content-center">
					<h4>Loading....</h4>
				</div>
			</section>
		)
	}

	const renderErrorFetchingOrder = () => {
		return (
			<section className="contenedor mt-5 pt-4 ">
				<div className="row justify-content-center">
					<h4>Error</h4>
				</div>
			</section>
		)
	}


	if (error) {
		return renderErrorFetchingOrder()
	}

	if (isLoading) {
		return renderFetchingOrder()
	}



	return (
		<div>
			<div className="row justify-content-center">
				<main className="col-12 col-md-8">
					<div className="container pt-4">
						<h5>Productos</h5>
						<ProductsList products={products} />
					</div>
				</main>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	shoppingCart: state.shoppingCartReducer.shoppingCart,
	isLoading: state.shoppingCartReducer.loading,
	error: state.shoppingCartReducer.error,
})

const mapDispatchToProps = dispatch => ({
	updateShoppinCart: shoppingCart => dispatch(updateShoppinCart(shoppingCart)),
	fetchShoppinCart: shoppingCartId => dispatch(fetchShoppinCart(shoppingCartId)),
	updateShippingDate: (shoppingCartId, shippingGroupId, slotId) => dispatch(updateShippingDate(shoppingCartId, shippingGroupId, slotId)),
	updatePaymentMethod: (shoppingCartId, paymentMethod) => dispatch(updatePaymentMethod(shoppingCartId, paymentMethod)),
})

Home.defaultProps = {
	items: {},
	attribute: {},
	limit: 0,
	translations: '',
}

Home.propTypes = {
	shoppingCart: PropTypes.object.isRequired,
	fetchShoppinCart: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home)