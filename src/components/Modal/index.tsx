import { ModalContainer, ModalHeader, ModalWrapper } from './style'
import CloseIcon from '../../assets/close.svg'
import { useEffect, useState } from 'react'

export type ModalProps = {
  open: boolean
  title?: string
  children?: React.ReactNode
  containerStyle?: React.CSSProperties
  headerStyle?: React.CSSProperties
}

export const Modal = ({ open, title, children, containerStyle, headerStyle }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  return isOpen ? (
    <ModalWrapper className='modal-wrapper' onClick={() => setIsOpen(false)}>
      <ModalContainer
        className='modal-container'
        style={containerStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader style={headerStyle}>
          <div className='modal-title'>{title}</div>
          <figure className='close-icon' onClick={() => setIsOpen(false)}>
            <img src={CloseIcon} alt='close-icon' />
          </figure>
        </ModalHeader>

        {children}
      </ModalContainer>
    </ModalWrapper>
  ) : (
    <></>
  )
}
