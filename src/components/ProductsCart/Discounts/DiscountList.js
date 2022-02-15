import React from 'react'
import DiscountTag from './DiscountTag'



const DiscountList = (props) => {
  const { discounts } = props
	
	return (
				discounts.map( discount => (
				 <DiscountTag key={discount} discount={discount} />
				))
		)
}

export default DiscountList