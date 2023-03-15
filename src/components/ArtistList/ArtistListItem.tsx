import { ArtistDetails, ArtistListItemContainer, AvatarIcon, AvatarPlaceholder } from './style'
import CloseRedIcon from '../../assets/close-red.svg'

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
    <AvatarIcon className='artist-avatar'>
      {avatar ? <img src={avatar} alt='artist-avatar' /> : <AvatarPlaceholder />}
    </AvatarIcon>
    <ArtistDetails className='artist-details'>
      <h3>{name}</h3>
      <p>{email}</p>
    </ArtistDetails>
    {canDelete && (
      <figure className='artist-avatar' onClick={onDelete}>
        <img src={CloseRedIcon} alt='artist-delete-icon' />
      </figure>
    )}
  </ArtistListItemContainer>
)
