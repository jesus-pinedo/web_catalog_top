import React from 'react'



const DiscountTag = (props) => {
  const { discount } = props
	return (
		<span className="badge badge-pill badge-success ml-1">{discount.promo}</span>
	)
}



export default DiscountTag