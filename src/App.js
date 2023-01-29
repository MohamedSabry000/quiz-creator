import React from 'react'
import { QuizProvider } from './context/quiz'
import QuizAppRoutes from './routes'

function App() {
  return (
    <QuizProvider>
        <QuizAppRoutes />
    </QuizProvider>
  )
}

export default App