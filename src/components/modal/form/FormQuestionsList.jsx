import React, { useContext, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import QuizFormQuestionContainer from './containers/q/QuizFormQuestionContainer'
import StudentAnswer from '../../StudentAnswer'
import FormQuestion from './FormQuestion'
import { QuizContext } from '../../../context/quiz'

function FormQuestionsList() {
    const [currentQuestion, setCurrentQuestion] = React.useState({
        text: '',
        answers: [],
        feedback_false: '',
        feedback_true: ''
    })

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md mt-4">
        <h3 className='text-lg font-bold underline '>Questions</h3>
        <div className='p-2 bg-gray-600 rounded-md mt-2'>
            <FormQuestion question={currentQuestion} setQuestion={setCurrentQuestion} />
        </div>
        <ViewAllQuestions setQuestion={setCurrentQuestion}/>
    </div>
  )
}

export default FormQuestionsList

const ViewAllQuestions = ({setQuestion}) => {
    const { newQuiz, removeQuestionFromTheNewQuiz, updateTheNewQuizState } = useContext(QuizContext)

    const updateQuestion = (q) => {
        setQuestion({...q})
        updateTheNewQuizState('edit')
    }
    return (
        <div className='mt-4'>
            {
                newQuiz?.questions_answers.map((q, i) => 
                    <div className='bg-gray-300 px-4 py-2 rounded-md mt-2 relative' key={i}>
                        {/* Edit Button */}
                        <div className='!absolute top-1 right-0 flex'>
                            <button 
                                variant='contained' 
                                className='!mr-2 !rounded-full w-6 h-6 !bg-blue-500 flex justify-center items-center'
                                onClick={() => updateQuestion(q)}
                            >
                                <EditIcon className='text-white w-5 h-5' fontSize='small' />
                            </button>
                            <button 
                                variant='contained' 
                                className='!mr-2 !rounded-full w-6 h-6 !bg-red-500 flex justify-center items-center'
                                onClick={() => removeQuestionFromTheNewQuiz(q)}
                            >
                                <DeleteIcon className='text-white w-5 h-5' fontSize='small' />
                            </button>
                        </div>
                        <QuizFormQuestionContainer question={q} />
                        <StudentAnswer a={q.answers} onClick={() => {}} showValue={true} />
                    </div>
                )
            }
        </div>
    )
}