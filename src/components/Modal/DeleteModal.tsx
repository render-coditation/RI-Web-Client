import {
  DeleteModalActions,
  DeleteModalContainer,
  DeleteModalHeader,
  DeleteModalInput,
  DeleteModalText,
  ModalWrapper,
} from './style'
import DeleteModalIcon from '../../assets/DeleteModalIcon.svg'
import { useEffect, useState } from 'react'
import { Button, DangerButton } from '../Buttons'

export type DeleteModalProps = {
  open: boolean
  onDelete: () => void
  title: string
  subtitle?: string
  confirmKeyword?: string
  containerStyle?: React.CSSProperties
}

export const DeleteModal = ({
  open,
  title,
  subtitle,
  containerStyle,
  onDelete,
  confirmKeyword = 'DELETE',
}: DeleteModalProps) => {
  const [isOpen, setIsOpen] = useState(open)
  const [text, setText] = useState('')

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.toUpperCase())
  }

  const handleCancel = () => {
    setText('')
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  return isOpen ? (
    <ModalWrapper className='modal-wrapper' onClick={() => setIsOpen(false)}>
      <DeleteModalContainer
        className='modal-container'
        style={containerStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <figure>
          <img src={DeleteModalIcon} alt='DeleteModalIcon' />
        </figure>
        <DeleteModalHeader>{title}</DeleteModalHeader>
        <DeleteModalText>{subtitle}</DeleteModalText>

        <DeleteModalText
          as='label'
          htmlFor='confirm-delete-input'
          style={{
            textAlign: 'start',
            marginTop: '25px',
            fontSize: '11px',
            lineHeight: '13px',
            width: '100%',
          }}
        >
          {`Enter the word “${confirmKeyword}” below to confirm termination.`}
        </DeleteModalText>
        <DeleteModalInput id='confirm-delete-input' value={text} onChange={handleTextChange} />
        <DeleteModalActions>
          <Button style={{ color: 'black', borderColor: 'black' }} onClick={handleCancel}>
            Cancel
          </Button>
          <DangerButton disabled={text !== confirmKeyword} onClick={onDelete}>
            {`${confirmKeyword[0]}${confirmKeyword.slice(1).toLowerCase()}`}
          </DangerButton>
        </DeleteModalActions>
      </DeleteModalContainer>
    </ModalWrapper>
  ) : (
    <></>
  )
}
