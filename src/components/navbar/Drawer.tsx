import React from 'react'
import { TMenu } from '../../types/menu'
import { MenuUl } from './styled'

interface IDrawer {
  open: boolean
  items: TMenu[]
}

const Drawer: React.FC<IDrawer> = ({ open, items }) => (
  <MenuUl open={open}>
    {items.map((item) => (
      <li key={item.url}>
        <a href={item.url}>{item.title}</a>
      </li>
    ))}
  </MenuUl>
)

export default Drawer
