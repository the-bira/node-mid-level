'use client'

import { QuestionContext } from '@/context/QuestionsContext'
import { useContext } from 'react'


interface LiProps {
  item: string
}

const Li = ({ item }: LiProps) => {
  const { handleSelectedFile } = useContext(QuestionContext)
  return <li key={item} onClick={() => handleSelectedFile(item)}>{item}</li>
}

export default Li