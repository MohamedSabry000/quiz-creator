import React, { useContext, useState } from 'react'
import QuizFormElement from './containers/QuizFormElement'
import { QuizContext } from '../../../context/quiz'
import { Button } from '@mui/material'
import FormQuestionsList from './FormQuestionsList'

const inputStyle = 'w-full border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-amber-400 transition duration-300 ease-in-out text-sm md:text-base'

function QuizForm({handleClose}) {
  const { 
    updateQuiz,

    newQuiz, 
    updateTheNewQuiz, 
    addToQuizzes,
    validateTheNewQuiz,

    newQuizState,
} = useContext(QuizContext)

    const handleTitleChange = (e) => {
        updateTheNewQuiz({
            ...newQuiz,
            title: e.target.value
        })
    }

    const handleUrlChange = (e) => {
        updateTheNewQuiz({
            ...newQuiz,
            url: e.target.value
        })
    }

    const handleDescriptionChange = (e) => {
        updateTheNewQuiz({
            ...newQuiz,
            description: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(validateTheNewQuiz()) {
            newQuizState === 'new'
                ? addToQuizzes() 
                : updateQuiz(newQuiz?.id)
            handleClose()
        }

    }

    // Render the form for adding a question and answers
    return (
        <div className='mt-6 overflow-y-auto absolute h-full w-full top-0 left-0 '>
            {/* Form Title, URL, Description */}
            <div className="p-4 bg-gray-100 rounded-md shadow-md mt-4 ">
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <QuizFormElement label='Title'>
                        <input
                            className={inputStyle}
                            type='text'
                            name='title'
                            id='title'
                            value={newQuiz.title}
                            onChange={handleTitleChange}
                        />
                    </QuizFormElement>
                    <QuizFormElement label='URL'>
                        <input
                            className={inputStyle}
                            type='text'
                            name='url'
                            id='url'
                            value={newQuiz.url}
                            onChange={handleUrlChange}
                        />
                    </QuizFormElement>
                </div>
                <div className='mt-2 font-semibold text-sm md:text-base'>
                    <label htmlFor='description'>Description:</label>
                    <textarea
                        className={inputStyle}
                        name='description'
                        id='description'
                        value={newQuiz.description}
                        onChange={handleDescriptionChange}
                    />
                </div>
            </div>
            {/* Form Questions [] */}
            <FormQuestionsList />
            <Button className="!my-5 !mb-10" variant='contained' onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default QuizForm