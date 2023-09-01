'use client'
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from 'react'

interface ContextProps {
  inputVal: string
  setInputVal: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext<ContextProps>({
  inputVal: '',
  setInputVal: () => {},
})

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [inputVal, setInputVal] = useState('')
  return (
    <GlobalContext.Provider value={{ inputVal, setInputVal }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
