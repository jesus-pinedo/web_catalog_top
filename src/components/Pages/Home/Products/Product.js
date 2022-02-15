import React, { Component } from 'react'
import CustomCurrencyFormat from './../../../Commons/CustomCurrencyFormat'

class Product extends Component {
	render() {
		const {
			product: { name, priceInfo, img, description, id, brand } } = this.props
		//	const img = `https://images.lider.cl/wmtcl?source=url[file:/productos/1050669a.jpg]&scale=size[300x300]&&sink`
		return (
			<div className="card mb-5 border-0">
				<img className="img-fluid float-right img-thumbnail border-0" src={img} alt="" ></img>
				<div className="card-body">
					<div className="card-title font-weight-bold">{brand}</div>
					<span className="card-title">{name}</span>
					{/* <p className="card-subtitle muted mb-2">{description}</p> */}
					<p className="card-text">
						<strong>
						<CustomCurrencyFormat value={priceInfo.salePrice}/> </strong>
					</p>

				</div>

					<button className="btn  btn-block  badge-pill badge-dark" id={`btn-${id}`}>Comprar</button>

			</div>
		)
	}
}

export default Product