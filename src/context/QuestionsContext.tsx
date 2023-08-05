'use client'
import {
  ReactNode,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react'


type QuestionContextType = {
  selectedFile: string
  fileContent: string
  handleSelectedFile: (file: string) => Promise<void>
  handleFileContentChange: (code: string) => void
}

export const QuestionContext = createContext({} as QuestionContextType)

interface QuestionCOntextProviderProps {
  children: ReactNode
}

export function QuestionContextProvider({ children }: QuestionCOntextProviderProps) {

  const [selectedFile, setSelectFile] = useState('')
  const [fileContent, setFileContent] = useState('')


  useEffect(() => {
    // const stateJSON = JSON.stringify(cartState)
    // localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [])

  async function handleSelectedFile(item: string) {
    setSelectFile(item)
    const response = await fetch('/api/question/' + item)
    const data = await response.json()
    console.log(data)
    setFileContent(data.body)
  }

  function handleFileContentChange(code: string) {
    setFileContent(code)
  }

  return (
    <QuestionContext.Provider
      value={{
        selectedFile,
        fileContent,
        handleSelectedFile,
        handleFileContentChange,
      }}
    >
      {children}
    </QuestionContext.Provider>
  )
}