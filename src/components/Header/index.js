import React, { Fragment, useEffect } from 'react'
import { useModal } from 'react-modal-hook'
import PropTypes from 'prop-types'
import CustomModal from '../CustomModal'
import { connect } from 'react-redux'
import {quantityProducts } from '../../selectors/shoppinCart'
import Cart from '../Pages/Home/Cart'
import './index.css'



const Header = (props) => {
  const {
    shoppingCart, quantityProducts
  } = props


  const [showModal, hideModal] = useModal(() => (
    <CustomModal isOpen closeModalAction={hideModal}>
		 <Cart 
		    shoppingCart={shoppingCart}
			/>
    </CustomModal>
  ), [shoppingCart])


  const debitButtonHandler = () => {
    showModal()
  }


  return (
		<header className="row ">
			<div className="col-9">
			<img src={`/images/logo.png`} width={60} height={50} alt={'logo'}/>
					<strong>Walmar Pricing   * Landing*</strong>
					
			</div>

			<div className="col">
			<span className="badge badge-warning"
			onClick={()=> showModal()} >{quantityProducts}</span> 
			
			</div>
		</header>
  )
}

Header.propTypes = {
  paymentOptionSelected: PropTypes.string.isRequired,
  paymentOptionHandler: PropTypes.func.isRequired,


}

const mapStateToProps = state => ({
	shoppingCart: state.shoppingCartReducer.shoppingCart,
	isLoading : state.shoppingCartReducer.loading,
	quantityProducts:quantityProducts(state)
})


export default connect(
  mapStateToProps,
  null,
)(Header)
