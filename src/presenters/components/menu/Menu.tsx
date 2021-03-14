import React, { useEffect, useState } from 'react'
import { TMenu } from '../../../types/menu'
import getMenus from './helpers/getMenus'
import Navbar from '../../../components/navbar/Navbar'

const Menu: React.FC = () => {
  const [menus, setMenus] = useState<TMenu[]>()
  useEffect(() => {
    getMenus().then((response) => {
      setMenus(response)
    })
  }, [])

  if (!menus) {
    return <>Loading...</>
  }

  return <Navbar items={menus} />
}

export default Menu
