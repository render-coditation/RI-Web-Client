import styled from 'styled-components'
import { FlexColumn } from '../SharedComponents'

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

export const ModalContainer = styled(FlexColumn)`
  border-radius: 10px;
  background-color: white;
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

export const DeleteModalContainer = styled(ModalContainer)`
  align-items: center;
  padding: 28px 41px;
  max-width: 398px;
`

export const DeleteModalHeader = styled.p`
  margin-top: 22px;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`

export const DeleteModalText = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #808080;
  text-align: center;
`

export const DeleteModalInput = styled.input`
  width: 100%;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  margin-bottom: 25px;
  margin-top: 5px;
`

export const DeleteModalActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  button {
    flex: 1;
  }
`
