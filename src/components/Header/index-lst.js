import React, { Component } from 'react'
import { connect } from 'react-redux'

import './index.css';
import {
  Link
} from "react-router-dom"
class Header extends Component {
	

	renderQuantityProducts = () => {
		return (
  <span className="badge badge-warning">{}</span> 
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

})

export default connect(
  mapStateToProps,
  null,
)(Header)