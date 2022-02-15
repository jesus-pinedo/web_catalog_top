import React, { Component } from 'react'
import { connect } from 'react-redux'
import {quantityProducts } from '../../selectors/shoppinCart'
import './index.css';
import {
  Link
} from "react-router-dom"
class Header extends Component {
	

	renderQuantityProducts = () => {
		const { quantityProducts } = this.props
		return (
  <span className="badge badge-warning">{quantityProducts}</span> 
		)
	}

	render (){
		return (
		<header className="row ">
			<div className="col-9">
			<img src={`/images/logo.png`} width={60} height={50} alt={'logo'}/>
					<strong>Top Quality</strong>
					
			</div>

			<div className="col-2">

			
			</div>
			<div className="col">
			<Link to="/shopping-cart"></Link>

			</div>
		</header>
		)
	}
}


const mapStateToProps = state => ({
	shoppingCart: state.shoppingCartReducer.shoppingCart,
	isLoading : state.shoppingCartReducer.loading,
	quantityProducts:quantityProducts(state)
})

export default connect(
  mapStateToProps,
  null,
)(Header)