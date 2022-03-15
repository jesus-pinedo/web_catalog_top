import React, {
	useEffect
} from 'react'
import ReactGA from 'react-ga';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductsList from './Products/ProducstList'
import { fecthProducts } from '../../../redux/actions'
import './index.css'
import {
  useLocation
} from "react-router-dom";



const Home = (props) => {
	const { error, isLoading , products} = props
	let query = useQuery();
	
const showRef = query.get('showRef')

	useEffect(() => {



		const { fecthProducts } = props
		if (products.length===0)
		fecthProducts()
	})


	useEffect(() => {
		ReactGA.initialize('UA-54486624-2')
		ReactGA.pageview(window.location.pathname + window.location.search)
		console.log("react::", ReactGA)
	}, []);

	function useQuery() {
		const { search } = useLocation();
	
		return React.useMemo(() => new URLSearchParams(search), [search]);
	}

	/*const fecthProducts = () => {
		const stagingUrl = 'http://localhost:3001'
		axios.get(`${stagingUrl}/product/list/all`)
			.then(res => {
				const response = res.data
				setProducts(response)
			})
	}*/



	const renderFetchingOrder = () => {
		return (
			<section className="contenedor mt-5 pt-4 ">
				<div className="row mt-5 justify-content-center">
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
						<ProductsList products={products} showRef={showRef}/>
					</div>
				</main>
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	products: state.productsReducer.products,
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
	products: PropTypes.array.isRequired,
	fecthProducts: PropTypes.func.isRequired
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home)