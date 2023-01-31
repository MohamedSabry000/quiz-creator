import React, { useContext } from 'react'
import FlexCenter from './flex/FlexCenter'
import { Button } from '@mui/material'
import { QuizContext } from '../context/quiz'
import QuizItem from './QuizItem'
import CreateQuizModal from './modal/CreateQuizModal'

function Quizzes() {
  const { quizzes } = useContext(QuizContext)

  return (
    <div className='border-t-2 border-amber-400'>
      <CreateQuizModal />

      <FlexCenter>
        <div className='!mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-4 py-2'>
          {
            quizzes.map((quiz) => <QuizItem key={quiz.id} quiz={quiz} />)
          }
        </div>
      </FlexCenter>
    </div>
  )
}

export default Quizzes