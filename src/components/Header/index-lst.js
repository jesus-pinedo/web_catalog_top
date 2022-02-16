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
			<img src={`/images/full-Logo.png`} width={102} height={77} alt={'logo'}/>
					<strong></strong>
					
			</div>

			<div className="col-2">

			
			</div>
			<div className="col">
			<Link to="/test"></Link>

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