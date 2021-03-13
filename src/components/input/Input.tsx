import styled from 'styled-components'
import React, { useState } from 'react'

const InputBox = styled.input`
    padding: 0.5rem;
    grid-column: 2;
    grid-row: 1;
    outline: none;
    background: none;
    border: none;
    font-size: 1rem;
    color: #fff;
`

const InputContent = styled.div`
    display: grid;
    grid-template-columns: 1.5rem 4fr 1fr;
    width: 300px;
    overflow: hidden;
    border-bottom: 2px solid #fff;

    div.icon {
        border: 0;
        padding: 0.5rem;
        grid-column: 4;
        grid-row: 1;

        svg {
            fill: whitesmoke;
            transition: 0.3s;
        }
    }
`

interface IInput {
    onClick: (value: string) => void
    placeholder: string
    icon: JSX.Element
}
export const Input: React.FC<IInput> = ({ onClick, placeholder, icon }) => {
    const [inputValue, setValue] = useState<string>('')

    const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            onClick(inputValue)
            setValue('')
        }
    }

    return (
        <InputContent>
            <InputBox
                type="text"
                value={inputValue}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                onKeyPress={onKeyPress}
            />
            <div className="icon">{icon}</div>
        </InputContent>
    )
}
