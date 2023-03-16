import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { ArtistListItem } from './ArtistListItem'
import {
  AddArtistBtn,
  ArtistListContainer,
  ArtistSearch,
  ArtistSearchBar,
  ArtistSearchSection,
  Section,
  SectionLine,
} from './style'
import AddIcon from '../../assets/add-icon.svg'
import { Button } from '../Buttons'

export type Artist = {
  name: string
  email: string
  avatar?: string
}

export type ArtistListProps = {
  artists: Artist[]
  showAddBtn?: boolean
  onAdd?: () => void
  onDelete?: () => void
  showSearchBar?: boolean
}

export const ArtistList = ({
  artists,
  showAddBtn = true,
  onAdd,
  onDelete,
  showSearchBar = true,
}: ArtistListProps) => {
  const [searchText, setSearchText] = useState('')
  return (
    <ArtistListContainer>
      {showSearchBar && (
        <ArtistSearchSection>
          <Section>
            <p>Search Artists</p>
            <SectionLine />
          </Section>
          <ArtistSearch>
            <ArtistSearchBar
              placeholder='Search for name or emails'
              value={searchText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)}
            />
            <Button onClick={onAdd}>Add</Button>
          </ArtistSearch>
        </ArtistSearchSection>
      )}
      <Section>
        <p>Artists</p>
        {showAddBtn && (
          <AddArtistBtn onClick={onAdd}>
            <AiOutlinePlus size={15} />
            Add
          </AddArtistBtn>
        )}
      </Section>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        }}
      >
        {artists.map((artist) => (
          <ArtistListItem
            name={artist.name}
            email={artist.email}
            avatar={artist.avatar}
            onDelete={onDelete}
            key={artist.name}
          />
        ))}
      </div>
    </ArtistListContainer>
  )
}
