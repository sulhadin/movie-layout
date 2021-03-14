import React from 'react'
import { Input } from '../../../components/input/Input'
import { SearchIcon } from '../../../components/svg/icons'

const Search: React.FC = () => {
    return (
        <Input
            icon={<SearchIcon />}
            onClick={(result) => {
                console.log('result', result)
            }}
            placeholder={'Arama'}
        />
    )
}

export default Search
