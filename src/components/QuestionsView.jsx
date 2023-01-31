import React, { useContext, useState } from 'react'
import ItemBG from '../assets/item-bg.jpg'
import QuizFormQuestionContainer from './modal/form/containers/q/QuizFormQuestionContainer'
import StudentAnswer from './StudentAnswer'
import FlexBetween from './flex/FlexBetween'
import { QuizContext } from '../context/quiz'
import { Button } from '@mui/material'
import { toast } from 'react-toastify'

function QuestionsView({
    quiz
}) {
  const { updateScore } = useContext(QuizContext)
  const [myQuiz, setMyQuiz] = useState(deepCopy(quiz))

  function deepCopy (obj) {
    return JSON.parse(JSON.stringify(obj))
  }

  const handleRetake = () => {
    setMyQuiz(deepCopy(quiz))
  }

  const handleAnswer = (e, questionId) => {
    const newQuiz = {...myQuiz}
    const question = newQuiz.questions_answers.find(q => q.id === questionId)
    question.answer_id = e.target.value
    setMyQuiz(newQuiz)
  }

  const validate = () => {
    const questions = myQuiz.questions_answers.filter(q => q.answer_id === null)
    if(questions.length > 0) {
      toast.error('Please answer all questions')
      return false
    }
    return true
  }

  const evaluate = () => {
    if(!validate()) return
    const score = myQuiz.questions_answers.filter(q => {
      const answer = q.answers.find(a => a.id+'' === q.answer_id+'')
      return answer.is_true
    }).length

    const percentage = ((score / myQuiz.questions_answers.length) * 100).toFixed(2)+'%'
    toast.success(`You scored ${percentage}`)
    updateScore(quiz.id, percentage)
  }

  return (
    <div className="p-4 md:p-6">
      <FlexBetween 
        className={`mb-4 p-2 text-white rounded-md`} 
        style={{backgroundImage: `url(${ItemBG})`}}
      >
        <h3 className='text-base font-bold underline '>Last Score: {quiz?.score || 'Zero'}</h3>
        <button className='!rounded-md !bg-blue-500 !text-white !px-4 !py-1' onClick={handleRetake}>Retake</button>
      </FlexBetween>
        {myQuiz?.questions_answers?.map((question, index) => (
            <div key={index}>
              <QuizFormQuestionContainer question={question}  />
              <div className='mt-2 px-4'>
                <StudentAnswer q={question} a={question?.answers} onClick={e => handleAnswer(e, question.id)} />
              </div>
            </div>
        ))}

        <Button variant='contained' className='!mt-4 !rounded-md !bg-blue-500 !text-white !px-4 !py-1' onClick={evaluate}>Submit</Button>
    </div>
  )
}

export default QuestionsView