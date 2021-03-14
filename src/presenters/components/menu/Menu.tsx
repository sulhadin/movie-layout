import React from 'react'

import Navbar from '../../../components/navbar/Navbar'
import useMenu from './hooks/useMenu'

const Menu: React.FC = () => {
  const { menus } = useMenu()

  if (!menus) {
    return <>Loading...</>
  }

  return <Navbar items={menus} />
}

export default Menu
