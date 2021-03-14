import { useEffect, useState } from 'react'
import { TMenu } from '../../../../types/menu'
import getMenus from '../helpers/getMenus'

interface IUseMenu {
  menus: TMenu[] | undefined
}

export default function useMenu(): IUseMenu {
  const [menus, setMenus] = useState<TMenu[]>()
  useEffect(() => {
    getMenus().then((response) => {
      setMenus(response)
    })
  }, [])

  return {
    menus,
  }
}
