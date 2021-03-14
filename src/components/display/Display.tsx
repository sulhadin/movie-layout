import React from 'react'

interface IDisplay {
  display: boolean
}

export const Display: React.FC<IDisplay> = ({ display, children }) => {
  if (!display) {
    return <></>
  }

  return <>{children}</>
}
