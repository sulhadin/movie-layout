import React from 'react'
import { Input } from '../../../components/input/Input'
import { SearchIcon } from '../../../components/svg/icons'
import styled from 'styled-components'

export const SearchContent = styled.div`
  width: 300px;
  padding: 10px;
`

const Search: React.FC = () => {
  const onSearch = (value) => {
    console.log('search value:', value)
  }

  return (
    <SearchContent>
      <Input icon={<SearchIcon />} onClick={onSearch} placeholder={'Arama'} />
    </SearchContent>
  )
}

export default Search
