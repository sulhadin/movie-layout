import React from 'react'
import { Input } from '../../../components/input/Input'
import { SearchIcon } from '../../../components/svg/icons'
import { SearchContent } from './styled'

const Search: React.FC = () => {
  const onSearch = (value) => {
    console.log('search value:', value)
  }

  return (
    <SearchContent>
      <Input icon={<SearchIcon />} callback={onSearch} placeholder="Arama" />
    </SearchContent>
  )
}

export default Search
