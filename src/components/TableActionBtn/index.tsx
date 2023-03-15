import DeleteIcon from '../../assets/icons/DeleteIcon'
import EditIcon from '../../assets/icons/EditIcon'
import TerminateIcon from '../../assets/icons/TerminateIcon'
import { TableActionBtnContainer } from './style'

export type TableActionBtnProps = {
  icon: JSX.Element
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const TableActionBtn = ({ icon, onClick }: TableActionBtnProps) => (
  <TableActionBtnContainer onClick={onClick}>{icon}</TableActionBtnContainer>
)

export const EditActionBtn = ({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => <TableActionBtn icon={<EditIcon />} onClick={onClick} />

export const DeleteActionBtn = ({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => <TableActionBtn icon={<DeleteIcon />} onClick={onClick} />

export const TerminateActionBtn = ({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}) => <TableActionBtn icon={<TerminateIcon />} onClick={onClick} />
