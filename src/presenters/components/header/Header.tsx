import React from 'react'
import Menu from '../menu/Menu'
import Search from '../search/Search'
import { Bar, Middle } from './styled'

const Header = () => {
    return (
        <Bar>
            <Middle>
                <Menu />
            </Middle>
            <Middle>
                <Search />
            </Middle>
        </Bar>
    )
}

export default Header
