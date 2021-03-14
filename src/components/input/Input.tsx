import React, { useState } from 'react'
import { Icon, InputText, Content } from './styled'

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
    <Content>
      <InputText
        type="text"
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
      />
      <Icon>{icon}</Icon>
    </Content>
  )
}
