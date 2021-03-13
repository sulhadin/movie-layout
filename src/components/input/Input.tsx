import React, { useState } from 'react'
import { Icon, InputBox, InputContent } from './styled'

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
            <Icon>{icon}</Icon>
        </InputContent>
    )
}
