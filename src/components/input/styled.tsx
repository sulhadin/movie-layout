import styled from 'styled-components'

export const InputBox = styled.input`
    padding: 0.5rem;
    grid-column: 2;
    grid-row: 1;
    outline: none;
    background: none;
    border: none;
    font-size: 1rem;
    color: #fff;
`

export const InputContent = styled.div`
    display: grid;
    grid-template-columns: 1.5rem 4fr 1fr;
    width: 300px;
    overflow: hidden;
    border-bottom: 2px solid #fff;
`

export const Icon = styled.div`
    border: 0;
    padding: 0.5rem;
    grid-column: 4;
    grid-row: 1;

    svg {
        fill: whitesmoke;
        transition: 0.3s;
    }
`
