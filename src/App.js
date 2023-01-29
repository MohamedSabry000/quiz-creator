import React from 'react'
import { QuizProvider } from './context/quiz'

function App() {
  return (
    <QuizProvider>
        <div>Hello</div>
    </QuizProvider>
  )
}

export default App