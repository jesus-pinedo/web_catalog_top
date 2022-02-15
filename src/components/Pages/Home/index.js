import React, {
	useEffect, useState
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Api from '../../../api'
import ProductsList from './Products/ProducstList'
import { fecthProducts } from '../../../redux/actions'
import './index.css'
import axios from 'axios';



const Home = (props) => {
	const [products, setProducts] = useState(null)
	const { error, isLoading } = props

	useEffect(() => {
		const { fecthProducts } = props
		if (!products)
		fecthProducts()
	}, [products, props])



	/*const fecthProducts = () => {
		const stagingUrl = 'http://localhost:3001'
		axios.get(`${stagingUrl}/product/list/all`)
			.then(res => {
				const response = res.data
				setProducts(response)
			})
	}*/

	useEffect(() => {
		fecthProducts()
	}, [])


	const renderFetchingOrder = () => {
		return (
			<section className="contenedor mt-5 pt-4 ">
				<div className="row justify-content-center">
					<h4>Cargando Productos...</h4>
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
	fecthProducts: state.productsReducer.products,
	isLoading: state.productsReducer.loading,
	error: state.productsReducer.error,
})

const mapDispatchToProps = dispatch => ({
	fecthProducts: () => dispatch(fecthProducts()),
})

Home.defaultProps = {
	items: {},
	attribute: {},
	limit: 0,
	translations: '',
}

Home.propTypes = {
	products: PropTypes.object.isRequired,
	fecthProducts: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home)