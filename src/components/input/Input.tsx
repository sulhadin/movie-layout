import React from 'react'
import { Icon, InputText, Content } from './styled'
import useInput from './useInput'

interface IInput {
  callback: (value: string) => void
  placeholder: string
  icon: JSX.Element
}
export const Input: React.FC<IInput> = ({ callback, placeholder, icon }) => {
  const { inputValue, onKeyPress, setValue } = useInput(callback)

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
