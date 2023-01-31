import React from 'react'
import { QuizProvider } from './context/quiz'
import QuizAppRoutes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <QuizProvider>
        <QuizAppRoutes />
        <ToastContainer />
    </QuizProvider>
  )
}

export default App