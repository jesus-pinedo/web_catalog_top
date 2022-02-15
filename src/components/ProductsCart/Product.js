import React from 'react'
import CustomCurrencyFormat from '../Commons/CustomCurrencyFormat'
import DiscountList from './Discounts/DiscountList'

const inputHandleChange = (e,props) => {
	let { value } = e.target;
	const { handleChange, product: { id } } = props
	handleChange(id, parseInt(value))
}


	const Product = (props) => {

		const {
			product: { name, priceInfo, img, description, id, quantity } } = props
		return (
			<div className="row mt-2 mb-2 border-1 d-flex  align-items-center  product-box" id={id}>
				<div className="col-3">
					<img className="img-flui-d  w-75 border-0" src={img} alt="" ></img>
				</div>

				<div className="col-5">
					<span className=" product-title mb-3">{name}</span>
					<DiscountList discounts={priceInfo.discounts}/>
					<p className="product-subtitle  muted mb-2">{description}</p>
				</div>

				<div className="col-2 product-quantity" >
					<select value={quantity} onChange={(e)=> inputHandleChange(e, props)}>
					<option value="0"  >0</option>
						<option value="1"  >1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
						<option value="9">9</option>
						<option value="10">10</option>

					</select> 
				</div>
				<div className="col-2 " >
				<span className="product-sale-price"><CustomCurrencyFormat value={priceInfo.salePrice} /> </span>
		     <span className="product-amount"><CustomCurrencyFormat value={priceInfo.amount} /> </span>
				</div>
			</div>


		)
	}

export default Product