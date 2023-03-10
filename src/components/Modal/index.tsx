import { ModalContainer, ModalHeader, ModalWrapper } from './style'
import CloseIcon from '../../assets/close.svg'

export type ModalProps = {
  title?: string
  children?: React.ReactNode
  containerStyle?: React.CSSProperties
}

export const Modal = ({ title, children, containerStyle }: ModalProps) => {
  console.log('Modal rendered!')

  return (
    <ModalWrapper className='modal-wrapper'>
      <ModalContainer className='modal-container' style={containerStyle}>
        <ModalHeader>
          <div className='modal-title'>{title}</div>
          <figure className='close-icon'>
            <img src={CloseIcon} alt='close-icon' />
          </figure>
        </ModalHeader>

        {children}
      </ModalContainer>
    </ModalWrapper>
  )
}
