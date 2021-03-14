import React, { useState } from 'react'

interface IUseInput {
  inputValue: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function useInput(callback: (value: string) => void): IUseInput {
  const [inputValue, setValue] = useState<string>('')

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      callback(inputValue)
      setValue('')
    }
  }

  return {
    inputValue,
    setValue,
    onKeyPress,
  }
}
