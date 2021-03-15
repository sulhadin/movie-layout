import React from 'react'
import Menu from '../menu/Menu'
import Search from '../search/Search'
import { Bar } from './styled'

const Header: React.FC = () => (
  <Bar>
    <div>
      <Menu />
    </div>
    <div>
      <Search />
    </div>
  </Bar>
)

export default Header
