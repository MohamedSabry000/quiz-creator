import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import FlexCenter from './flex/FlexCenter'
import FlexBetween from './flex/FlexBetween'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { ModalContext } from '../context/modal'
import { QuizContext } from '../context/quiz'

function QuizItem({quiz}) {

    const { setTheNewQuiz } = useContext(QuizContext)
    const { openModal } = useContext(ModalContext)

    const restrictText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...'
        }
        return text
    }

    const handleEdit = (e, id) => {
        e.preventDefault()
        e.stopPropagation()

        setTheNewQuiz(quiz)
        openModal('quiz')
    }

  return (
    <Link to={`/quiz/${quiz.id}`}>
        <FlexCenter className='border border-gray-600 rounded-md bg-gray-400 hover:bg-gray-500 transition duration-300 ease-in-out'>
            <div className='p-4'>
                <div className='text-2xl font-bold'>{quiz.title}</div>
                <div className='text-sm'>{restrictText(quiz.description, 100)}</div>

                <div className='flex justify-between items-center mt-4'>
                    <ReactPlayer 
                        url={quiz.url} 
                        width='100%' 
                        height='100%' 
                        controls={false}
                        muted={true}
                    />
                </div>

                <FlexBetween className='mt-4'>
                    <div className='text-sm'>Total Score: {quiz.score || 0}</div>
                    <div className='text-sm'>Total Questions: {quiz.questions_answers.length}</div>
                </FlexBetween>

                <FlexBetween className='mt-4'>
                    <Button 
                        variant='contained' 
                        color='primary' 
                        onClick={(e) => handleEdit(e, quiz.id)}
                    > 
                        Edit
                    </Button>
                    <Button variant='contained' color='error'>Delete</Button>
                </FlexBetween>
            </div>
        </FlexCenter>
    </Link>
  )
}

export default QuizItem