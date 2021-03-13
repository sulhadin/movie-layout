import React from 'react'
import styled from 'styled-components'
import { TMenu } from '../../types'

interface IUL {
    open: boolean
}

const Ul = styled.ul<IUL>`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 1;
    li {
        padding: 18px 10px;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #3f4251;
        position: fixed;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};
        top: -1rem;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: #fff;
        }
    }
`

interface IDrawer {
    open: boolean
    items: TMenu[]
}

const Drawer: React.FC<IDrawer> = ({ open, items }) => {
    return (
        <Ul open={open}>
            {items.map((item) => (
                <li key={item.url}>{item.title}</li>
            ))}
        </Ul>
    )
}

export default Drawer
