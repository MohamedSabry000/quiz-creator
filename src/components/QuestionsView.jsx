import React from 'react'
import QuizFormQuestionContainer from './modal/form/containers/q/QuizFormQuestionContainer'
import StudentAnswer from './StudentAnswer'

function QuestionsView({
    questions
}) {
  return (
    <div className="p-4 md:p-6">
        {questions.map((question, index) => (
            <div key={index}>
            <QuizFormQuestionContainer question={question}  />
            <StudentAnswer a={question?.answers} />
            </div>
        ))}
    </div>
  )
}

export default QuestionsView