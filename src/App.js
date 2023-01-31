import React from 'react'
import { QuizProvider } from './context/quiz'
import QuizAppRoutes from './routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalProvider } from './context/modal';

function App() {
  return (
    <QuizProvider>
        <ModalProvider>
            <QuizAppRoutes />
            <ToastContainer />
        </ModalProvider>
    </QuizProvider>
  )
}

export default App