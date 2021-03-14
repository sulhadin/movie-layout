import styled from 'styled-components'

export const InputText = styled.input`
    padding: 0;
    margin: 0;
    grid-column: 2;
    grid-row: 1;
    outline: none;
    background: none;
    border: none;
    font-size: 1rem;
    color: #fff;
    height: 30px;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1.5rem 4fr 1fr;
    width: 100%;
    overflow: hidden;
    border-bottom: 2px solid #fff;
    height: 30px;
`

export const Icon = styled.div`
    border: 0;
    padding: 0;
    margin: 0;
    grid-column: 4;
    grid-row: 1;
    height: 30px;

    svg {
        fill: whitesmoke;
        transition: 0.3s;
    }
`
