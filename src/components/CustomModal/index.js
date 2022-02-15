import React, { useEffect } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { customModalStyles, CloseModalButton, ModalHeaderControlsContainer } from './styled'

const ReactModalAdapter = ({ className, modalClassName, ...props }) => (
  <Modal
    className={modalClassName}
    portalClassName={className}
    bodyOpenClassName="portalOpen"
    {...props}
  />
)

const StyledReactModal = styled(ReactModalAdapter).attrs({
  modalClassName: 'Modal',
})`
  & .Modal {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: ${props => props.height};
    max-width: 760px;
    width: 760px;
    background: #fff;
    border-radius: 6px;
    position: absolute;
    overflow-y: scroll; 
    @media(max-width: 767px){
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      margin-right: unset;
      transform: unset;
      padding: 0;
    }
  }
`

const CustomModal = (props) => {
  const {
    isOpen, children, closeModalAction, height,
  } = props

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  })

  return (
    <StyledReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      height={height}
      onRequestClose={closeModalAction}
      style={customModalStyles}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      shouldFocusAfterRender
      closeTimeoutMS={200}
      className="ReactModal__Content--SelectorModal"
    >
      <ModalHeaderControlsContainer>
        <CloseModalButton
          type="button"
          onClick={closeModalAction}
          className="zmdi zmdi-close"
        />
      </ModalHeaderControlsContainer>
      {children}
    </StyledReactModal>
  )
}

CustomModal.defaultProps = {
  height: 'unset',
}

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  closeModalAction: PropTypes.func.isRequired,
  height: PropTypes.string,
}

ReactModalAdapter.defaultProps = {
  className: '',
  modalClassName: '',
}

ReactModalAdapter.propTypes = {
  className: PropTypes.string,
  modalClassName: PropTypes.string,
}


export default CustomModal
