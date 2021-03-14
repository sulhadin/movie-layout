import styled from 'styled-components'
import React from 'react'

interface IBurger {
    open: boolean
}

export const StyledBurger = styled.div<IBurger>`
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

interface IMenu {
    open: boolean
}

export const MenuUl = styled.ul<IMenu>`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    z-index: 1;
    margin: 0;
    padding: 10px;

    li {
        padding: 15px 10px;
        display: block;
        a {
            padding: 15px 10px;
            text-decoration: none;
            color: var(--fore-color);
            font-size: 20px;
        }
        a:hover {
            background: var(--blue);
        }
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: var(--background-secondary);
        position: fixed;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        li {
            color: var(--fore-color);
        }
    }
`
