import React, { useContext } from 'react'
import ReactPlayer from 'react-player'
import FlexCenter from './flex/FlexCenter'
import FlexBetween from './flex/FlexBetween'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ItemBG from '../assets/item-bg.jpg'
import { ModalContext } from '../context/modal'
import { QuizContext } from '../context/quiz'

function QuizItem({quiz}) {

    const { setTheNewQuiz, updateTheNewQuizState, removeFromQuizzes } = useContext(QuizContext)
    const { openModal } = useContext(ModalContext)

    const restrictText = (text, length) => {
        if (text?.length > length) {
            return text.substring(0, length) + '...'
        }
        return text
    }

    const handleEdit = (e, id) => {
        e.preventDefault()
        e.stopPropagation()

        setTheNewQuiz(quiz)
        updateTheNewQuizState('edit')
        openModal('quiz')
    }

    const handleDelete = (e, id) => {
        e.preventDefault()
        e.stopPropagation()

        removeFromQuizzes(id)
    }

  return (
    <Link to={`/quiz/${quiz.id}`}>
        <FlexCenter 
            className='border border-gray-600 rounded-md text-white mb-4'
            style={{backgroundImage: `url(${ItemBG})`}}
        >
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
                    <Button variant='contained' color='error' onClick={e => handleDelete(e, quiz.id)}>Delete</Button>
                </FlexBetween>
            </div>
        </FlexCenter>
    </Link>
  )
}

export default QuizItem