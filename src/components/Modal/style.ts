import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export const ModalContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 30px 35px;
`
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 30px;

  .modal-title {
    flex: 1;
  }

  .close-icon {
    width: 32px;
    height: 32px;
  }

  .close-icon img {
    width: 100%;
    height: 100%;
  }
`
