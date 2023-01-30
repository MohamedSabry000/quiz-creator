import React, { useContext, useState } from 'react'
import QuizFormElement from './QuizFormElement'
import { QuizContext } from '../context/quiz'
import FlexCenter from './flex/FlexCenter'
import { Button } from '@mui/material'
import QuizFormQuestionContainer from './QuizFormQuestionContainer'

const inputStyle = 'w-full border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-amber-400 transition duration-300 ease-in-out text-sm md:text-base'

function QuizForm({handleClose}) {
  const { quizzes } = useContext(QuizContext)

    const [quiz, setQuiz] = useState({
        id: quizzes.length + 1,
        title: '',
        description: '',
        url: '',
        questions: []
    })

    const [question, setQuestion] = useState({
        text: '',
        answers: [],
        feedback_false: '',
        feedback_true: ''
    })
    const [qId, setQId] = useState(1)

    const [answer, setAnswer] = useState({
        text: '',
        is_true: false
    })

    const handleTitleChange = (e) => {
        setQuiz({
            ...quiz,
            title: e.target.value
        })
    }

    const handleUrlChange = (e) => {
        setQuiz({
            ...quiz,
            url: e.target.value
        })
    }

    const handleDescriptionChange = (e) => {
        setQuiz({
            ...quiz,
            description: e.target.value
        })
    }

    const handleQuestionChange = (e) => {
        setQuestion({
            ...question,
            question: e.target.value
        })
    }

    const handleAnswerChange = (e) => {
        setAnswer({
            ...answer,
            answer: e.target.value
        })
    }

    const handleCorrectChange = (e) => {
        setAnswer({
            ...answer,
            correct: e.target.checked
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(quiz)
    }

    const handleAddQuestion = (e) => {
        e.preventDefault()
        setQuiz({
            ...quiz,
            questions: [...quiz.questions, question]
        })
        setQuestion({
            text: '',
            answers: [],
            feedback_false: '',
            feedback_true: ''
        })
    }

    const getQuestionId = () => {
        setQId(qId + 1)
        return `Q ${qId}`
    }


    return (
        <form onSubmit={handleSubmit} className='mt-6 overflow-y-auto absolute h-full w-full top-0 left-0 '>
            <div className="p-4 bg-gray-100 rounded-md shadow-md mt-4 ">
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <QuizFormElement label='Title'>
                        <input
                            className={inputStyle}
                            type='text'
                            name='title'
                            id='title'
                            value={quiz.title}
                            onChange={handleTitleChange}
                        />
                    </QuizFormElement>
                    <QuizFormElement label='URL'>
                        <input
                            className={inputStyle}
                            type='text'
                            name='url'
                            id='url'
                            value={quiz.url}
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
                        value={quiz.description}
                        onChange={handleDescriptionChange}
                    />
                </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-md shadow-md mt-4">
                <h3 className='text-lg font-bold underline '>Questions</h3>
                <div className=''>
                    <QuizFormQuestionContainer 
                        question={question} 
                        setQuestion={setQuestion}
                    />
                    <FlexCenter>
                        <Button
                            variant='contained'
                            color='primary'
                            className='!mt-4'
                            onClick={handleAddQuestion}
                        >
                            Add This Question
                        </Button>
                    </FlexCenter>
                </div>
                <div className='mt-4'>
                    {
                        quiz.questions.map((q, i) => 
                            <QuizFormQuestionContainer 
                                key={i} 
                                question={q} 
                            />
                        )
                    }
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default QuizForm