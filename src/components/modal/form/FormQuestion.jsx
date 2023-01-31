import React, { useContext } from 'react'
import QuizFormQuestionContainer from './containers/q/QuizFormQuestionContainer'
import FlexCenter from '../../flex/FlexCenter'
import QuizFormAnswerContainer from './containers/a/QuizFormAnswerContainer'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'
import { QuizContext } from '../../../context/quiz'

function FormQuestion({
    question,
    setQuestion,
}) {

    const { newQuiz, updateTheNewQuiz, newQuizQuestionState, updateTheNewQuizQuestionState } = useContext(QuizContext)
    const [qId, setQId] = React.useState(0)

    const validateQuestion = () => {
        if(question.text === '') {
            toast.error('Please add a question')
            return false
        }
        console.log("🚀 ~ file: FormQuestion.jsx:34 ~ validateQuestion ~ question", question)

        if(question.answers.length < 2) {
            toast.error('Please add at least 2 answers')
            return false
        }
        if(question.feedback_true === '') {
            toast.error('Please add a feedback for true answers')
            return false
        }
        if(question.feedback_false === '') {
            toast.error('Please add a feedback for false answers')
            return false
        }
        
        if(question.answers.find(a => a.is_true) === undefined) {
            toast.error('Please add one true answer')
            return false
        }
        return true
    }
    const handleAddQuestion = (e) => {
        e.preventDefault()
        if(validateQuestion()){
            setQId(qId + 1) 
            updateTheNewQuiz({
                ...newQuiz,
                questions_answers: [
                    ...newQuiz.questions_answers, 
                    {...question, id: qId}
                ]
            })
            setQuestion({
                text: '',
                answers: [],
                feedback_false: '',
                feedback_true: ''
            })
        }
    }

    const handleEditQuestion = (e) => {
        e.preventDefault()
        if(validateQuestion()){
            updateTheNewQuiz({
                ...newQuiz,
                questions_answers: newQuiz.questions_answers.map(q => {
                    if(q.id === question.id) {
                        return question
                    }
                    return q
                })
            })
            setQuestion({
                text: '',
                answers: [],
                feedback_false: '',
                feedback_true: ''
            })
            updateTheNewQuizQuestionState('add')
        }
    }

    const resetQuestion = () => {
        setQuestion({
            text: '',
            answers: [],
            feedback_false: '',
            feedback_true: ''
        })
        updateTheNewQuizQuestionState('add')
    }

  return (
    <div className=''>
        {/* Question */}
        <QuizFormQuestionContainer 
            question={question} 
            setQuestion={setQuestion}
        />
        {/*  Answers */}
        <div className='mt-2 bg-gray-300 px-4 py-2 rounded-md'>
            <FlexCenter className={"mt-1 text-gray-700 underline relative"}>
                <h3 className='font-semibold text-sm md:text-base'>Answers:</h3>
            </FlexCenter>
            <QuizFormAnswerContainer 
                answers={question?.answers} 
                setAnswers={answers => setQuestion({...question, answers})} 
            />
        </div>
        <FlexCenter>
            <Button
                variant='contained'
                color='primary'
                className='!mt-4'
                onClick={
                    newQuizQuestionState === 'edit' ? handleEditQuestion : handleAddQuestion
                }
            >
                {
                    newQuizQuestionState === 'edit' ? 'Edit Question' : 'Add Question'
                }
            </Button>
            {
                newQuizQuestionState === 'edit' && 
                    <Button
                        variant='contained'
                        color='warning'
                        className='!mt-4 !mx-2'
                        onClick={() => resetQuestion()}
                    >
                        Reset
                    </Button>
            }
        </FlexCenter>
    </div>
  )
}

export default FormQuestion