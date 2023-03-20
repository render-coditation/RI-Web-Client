import {
  ArtistDetails,
  ArtistListItemContainer,
  AvatarIcon,
  AvatarPlaceholder,
  DeleteIcon,
} from '../style'
import CloseRedIcon from '../../../assets/close-red.svg'
import { IoCloseSharp } from 'react-icons/io5'

export type ArtistListItemProps = {
  name: string
  email: string
  avatar?: string
  canDelete?: boolean
  onDelete?: () => void
}

export const ArtistListItem = ({
  name,
  email,
  avatar,
  canDelete = true,
  onDelete,
}: ArtistListItemProps) => (
  <ArtistListItemContainer>
    <AvatarIcon>
      {avatar ? <img src={avatar} alt='artist-avatar' /> : <AvatarPlaceholder />}
    </AvatarIcon>
    <ArtistDetails>
      <h3>{name}</h3>
      <p>{email}</p>
    </ArtistDetails>
    {canDelete && (
      <DeleteIcon onClick={onDelete}>
        <IoCloseSharp size={20} />
      </DeleteIcon>
    )}
  </ArtistListItemContainer>
)
