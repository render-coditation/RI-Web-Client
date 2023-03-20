import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { Button, PrimaryButton } from '../../Buttons'
import { ArtistListItem } from './ArtistListItem'
import {
  ArtistListContainer,
  ArtistSearch,
  ArtistSearchBar,
  ArtistSearchSection,
  ListContainer,
  ListContainerList,
  ListItems,
  Section,
  SectionLine,
} from '../style'

interface User {
  email: string
  name: string
  image: string
}
const users = [
  {
    email: 'john@example.com',
    name: 'John Smith',
    image: 'https://dummyimage.com/100x100/000000/ffffff&text=John',
  },
  {
    email: 'jane@example.com',
    name: 'Jane Doe',
    image: 'https://dummyimage.com/100x100/000000/ffffff&text=Jane',
  },
  {
    email: 'mike@example.com',
    name: 'Mike Johnson',
    image: 'https://dummyimage.com/100x100/000000/ffffff&text=Mike',
  },
  {
    email: 'sara@example.com',
    name: 'Sara Lee',
    image: 'https://dummyimage.com/100x100/000000/ffffff&text=Sara',
  },
  {
    email: 'david@example.com',
    name: 'David Lee',
    image: 'https://dummyimage.com/100x100/000000/ffffff&text=David',
  },
  {
    email: 'as@example.com',
    name: 'as Lee',
    image: 'https://dummyimage.com/100x100/000000/ffffff&text=as',
  },
  {
    email: 'df@example.com',
    name: 'fg Lee',
    image: 'https://dummyimage.com/100x100/000000/ffffff&text=d',
  },
  {
    email: 'ty@example.com',
    name: 'yt Lee',
    image: 'https://dummyimage.com/100x100/000000/ffffff&text=yt',
  },
]

interface SearchBoxProps {
  setSelectedArtists: any
}
const SearchBox = ({ setSelectedArtists }: SearchBoxProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchedUser, setSearchedUser] = useState<User>()
  const [dropdownValues, setDropdownValues] = useState<User[]>([])
  const [selectedUsers, setSelectedUsers] = useState<User[]>([])

  const handleSearch = (e: any) => {
    const term = e.target.value
    console.log('Re', term)
    setSearchTerm(term)

    const matchingUsers = users.filter((user) => {
      return (
        !selectedUsers.some((selectedUser: any) => selectedUser.email === user.email) &&
        (user.email.toLowerCase().includes(term.toLowerCase()) ||
          user.name.toLowerCase().includes(term.toLowerCase()))
      )
    })

    setDropdownValues(matchingUsers)
  }
  interface User {
    email: string
    name: string
    image: string
  }

  const handleDropdownClick = (user: User) => {
    if (!selectedUsers.some((selectedUser: User) => selectedUser.email === user.email)) {
      setSearchedUser(user)
      setSearchTerm(`Name:${user.name} | Email:${user.email}`)
    }
    setDropdownValues([])
  }

  const handleRemoveClick = (user: { email: any }) => {
    const newSelectedUsers = selectedUsers.filter(
      (selectedUser: { email: any }) => selectedUser.email !== user.email,
    )
    setSelectedUsers(newSelectedUsers)
    setSelectedArtists(newSelectedUsers)
  }
  const handleAddClick = () => {
    console.log('searchedUser', searchedUser)

    if (searchedUser) {
      setSelectedUsers([...selectedUsers, searchedUser])
      setSelectedArtists([...selectedUsers, searchedUser])
      setSearchTerm('')
      setDropdownValues([])
    }
  }
  return (
    <ArtistListContainer>
      <ArtistSearchSection>
        <Section>
          <p>Search Artists</p>
          <SectionLine />
        </Section>
        <ArtistSearch>
          <ArtistSearchBar
            type='text'
            placeholder='Search for name or emails'
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchedUser && <Button onClick={handleAddClick}>Add</Button>}
        </ArtistSearch>
      </ArtistSearchSection>

      {dropdownValues.length > 0 && (
        <ListContainer>
          {dropdownValues.map((user: { email: any; name: any; image: any }) => (
            <ListItems key={user.email} onClick={() => handleDropdownClick(user)}>
              {user.name} ({user.email})
            </ListItems>
          ))}
        </ListContainer>
      )}
      <Section>
        <p>Artists</p>
      </Section>
      <ListContainerList>
        <ArtistListItem
          name={'Ashish Dani'}
          email={'ashish.dani@renderimagination.com'}
          avatar={'https://dummyimage.com/100x100/000000/ffffff&text=David'}
          canDelete={false}
        />

        <ArtistListItem
          name={'Render Imagination Tech Team'}
          email={'tech@renderimagination.com'}
          avatar={'https://dummyimage.com/100x100/000000/ffffff&text=Render'}
          canDelete={false}
        />

        {selectedUsers.map((artist: { name: string; email: string; image: string | undefined }) => (
          <ArtistListItem
            key={artist.email}
            name={artist.name}
            email={artist.email}
            avatar={artist.image}
            onDelete={() => handleRemoveClick(artist)}
          />
        ))}
      </ListContainerList>
    </ArtistListContainer>
  )
}

export default SearchBox
