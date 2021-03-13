import React from 'react'
import { Input } from '../../../components/input/Input'
import { SearchIcon } from '../../../components/svg/icons'

const Search: React.FC = () => {
    return (
        <div>
            <Input
                icon={<SearchIcon />}
                onClick={(result) => {
                    console.log('result', result)
                }}
                placeholder={'Search'}
            />
        </div>
    )
}

export default Search
