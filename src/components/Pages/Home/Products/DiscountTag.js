import React from 'react'



const DiscountTag = (props) => {
  const { discount } = props
	return (
		<span className="badge badge-pill badge-danger">{discount}</span>
	)
}



export default DiscountTag