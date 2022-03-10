import React, { Component } from 'react'
import CustomCurrencyFormat from './../../../Commons/CustomCurrencyFormat'


class Detail extends Component {
	render() {

			const img = `https://images.lider.cl/wmtcl?source=url[file:/productos/1050669a.jpg]&scale=size[300x300]&&sink`
		return (
			<div className="card mb-5 border-0">
				<div className="custom-thumbnail">
				<img className="" src={img} alt="" ></img>
				</div>
				<div className="card-body">
					<div className="card-title font-weight-bold">{'brand'}</div>
					<span className="card-title">{'name'}</span>
					{/* <p className="card-subtitle muted mb-2">{description}</p> */}
					<p className="card-text">
						<strong>
						<CustomCurrencyFormat value={56000}/> </strong>
					</p>

				</div>
     
					<button className="btn  btn-block  badge-pill badge-dark custom-button" id={`btn`}>Comprar</button>

			</div>
		)
	}
}

export default Detail