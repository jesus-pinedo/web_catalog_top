import React from 'react'
import { useModal } from 'react-modal-hook'
import PropTypes from 'prop-types'
import CustomModal from '../CustomModal'
import { connect } from 'react-redux'
import Cart from '../Pages/Home/Cart'
import './index.css'



const Header = (props) => {


  const [showModal, hideModal] = useModal(() => (
    <CustomModal isOpen closeModalAction={hideModal}>
		 <Cart 
		    shoppingCart={[]}
			/>
    </CustomModal>
  ), [])





  return (
		<header className="row ">
			<div className="col-9">
			<img src={`/images/logo.png`} width={60} height={50} alt={'logo'}/>
					<strong>Walmar Pricing   * Landing*</strong>
					
			</div>

			<div className="col">
			<span className="badge badge-warning"
			onClick={()=> showModal()} >{}</span> 
			
			</div>
		</header>
  )
}

Header.propTypes = {
  paymentOptionSelected: PropTypes.string.isRequired,
  paymentOptionHandler: PropTypes.func.isRequired,


}

const mapStateToProps = state => ({

})


export default connect(
  mapStateToProps,
  null,
)(Header)
