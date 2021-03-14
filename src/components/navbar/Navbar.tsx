import React, { useState } from 'react'
import Drawer from './Drawer'
import { TMenu } from '../../types/menu'
import { StyledBurger } from './styled'

interface INavbar {
    items: TMenu[]
}

const Navbar: React.FC<INavbar> = ({ items }) => {
    const [open, setOpen] = useState(false)

    return (
        <nav>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <Drawer open={open} items={items} />
        </nav>
    )
}

export default Navbar
