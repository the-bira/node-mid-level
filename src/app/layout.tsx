import Header from './components/Header'
import { QuestionContextProvider } from '@/context/QuestionsContext'

import './global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <QuestionContextProvider>
          <Header />
          {children}
        </QuestionContextProvider>
      </body>
    </html>
  )
}
