import styled from 'styled-components'

export const customModalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: '101',
  },
}

export const CloseModalButton = styled.button`
    border: none;
    cursor: pointer;
    padding: 0;
    background: #3d3d3d;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    width: 20px;
    height: 20px;
  `

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  align-items: flex-start;
  width: 100%;
  min-height: 110px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(220,213,213,0.5);
`
export const ModalHeaderControlsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin: 10px;
  padding-right: 12px;
  margin-bottom: 2px;
`

export const ModalHeaderContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  align-items: flex-end;
`
