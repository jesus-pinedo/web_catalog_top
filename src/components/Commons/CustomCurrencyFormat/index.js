import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format'
class CustomCurrencyFormat extends Component {
	render() {
		const { value, className } = this.props
		return (
			<CurrencyFormat
			className={className}
				value={value}
				thousandSeparator="."
				decimalSeparator=","
				displayType="text"
				prefix="$" />
		)
	}
}

export default CustomCurrencyFormat