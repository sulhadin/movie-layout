import React, { useState } from 'react'
import styled from 'styled-components'
import Drawer from './Drawer'
import { TMenu } from '../../types'

interface IBurger {
    open: boolean
}

const StyledBurger = styled.div<IBurger>`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: #ffffff;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        &:nth-child(2) {
            transform: ${({ open }) =>
                open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`
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
