import React from 'react'
import SearchIcon from '../../assets/icons/SearchIcon'
import * as S from './style'

export type SearchBoxProps = {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  containerStyles?: React.CSSProperties
}

export const SearchBox = ({
  value,
  onChange,
  placeholder = 'Search',
  containerStyles,
}: SearchBoxProps) => (
  <S.SearchBoxContainer style={containerStyles}>
    <SearchIcon />
    <S.SearchBoxInput type='text' value={value} onChange={onChange} placeholder={placeholder} />
  </S.SearchBoxContainer>
)
