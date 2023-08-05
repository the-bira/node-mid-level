'use client'

import { useContext, useEffect, useState } from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor'
import { QuestionContext } from '@/context/QuestionsContext'

interface CodeProps {
  selectedFile: string
}

const Code = () => {
  const { fileContent, selectedFile, handleFileContentChange } = useContext(QuestionContext)

  useEffect(() => {
    console.log(selectedFile)
  }, [selectedFile])

  return (
    <CodeEditor
      value={fileContent}
      language="ts"
      onChange={(evn) => handleFileContentChange(evn.target.value)}
      padding={15}
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        width: "100%"
      }}
    />
  );
}

export default Code