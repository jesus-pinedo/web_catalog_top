import React, { Component } from 'react'
import CustomCurrencyFormat from './../../../Commons/CustomCurrencyFormat'

class Product extends Component {

	redirect(){
		const {
			product: { name, priceInfo, brand } } = this.props
			const salePrice = priceInfo.salePrice
			const price = new Intl.NumberFormat().format(salePrice)
			const text = `Hola, quisiera comprar el producto:
			*${brand} ${name}, $${price}*`

			const url = `https://wa.me/573008672763?text=${text}`


		//	const encodedUrl = encodeURI(url);

			//Quisiera%20comprar%20este%20producto:%20https://www.topqualitybq.com/images/shoes/10.PNG
		window.location.href = url;
 }

	render() {
		const {
			product: { name, priceInfo, img, id, brand } } = this.props
		//	const img = `https://images.lider.cl/wmtcl?source=url[file:/productos/1050669a.jpg]&scale=size[300x300]&&sink`
		return (
			<div className="card mb-5 border-0">
				<div className="custom-thumbnail">
				<img className="img-fluid float-right img-thumbnail border-0 custom-thumbnail" src={img} alt="" ></img>
				</div>
				<div className="card-body">
					<div className="card-title font-weight-bold">{brand}</div>
					<span className="card-title">{name}</span>
					{/* <p className="card-subtitle muted mb-2">{description}</p> */}
					<p className="card-text">
						<strong>
						<CustomCurrencyFormat value={priceInfo.salePrice}/> </strong>
					</p>

				</div>
{/* 				<Link to={``}>
				<div>Link</div>
				</Link> */}
     
					<button 
					onClick={()=> this.redirect()}
					className="btn  btn-block  badge-pill badge-dark custom-button" 
					id={`btn-${id}`}>Comprar - {id}</button>

			</div>
		)
	}
}

export default Product