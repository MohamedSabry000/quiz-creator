import React, { useEffect, useState } from 'react'
import QuizFormElement from '../QuizFormElement'
import QuizInput from '../QuizInput'
import FlexCenter from '../../../../flex/FlexCenter'
import { Button } from '@mui/material'
import QuizFormAnswerContainer from '../a/QuizFormAnswerContainer'

function QuizFormQuestionContainer({
    className,
    question,
    setQuestion,
}) {

  return (
    <div className='mt-1 bg-gray-300 px-4 py-2 rounded-md'>
        <QuizFormElement label='Question'>
            <QuizInput
                name="question"
                id="question"
                value={question.text}
                readOnly={setQuestion? false : true}
                onChange={e => setQuestion(prev => ({...prev, text: e.target.value}))}
            />
        </QuizFormElement> 
        {
            setQuestion && (
                <div className=''>
                    <QuizFormElement label='Feedback in case of True'>
                        <QuizInput
                            name='Feedback in case of True'
                            id='Feedback in case of True'
                            value={question.feedback_true}
                            readOnly={setQuestion? false : true}
                            onChange={e => setQuestion(prev => ({...prev, feedback_true: e.target.value}))}
                        />
                    </QuizFormElement>
                    <QuizFormElement label='Feedback in case of False'>
                        <QuizInput
                            name='Feedback in case of False'
                            id='Feedback in case of False'
                            value={question.feedback_false}
                            readOnly={setQuestion? false : true}
                            onChange={e => setQuestion(prev => ({...prev, feedback_false: e.target.value}))}
                        />
                    </QuizFormElement>
                </div> 
            )
        }
    </div>
  )
}

export default QuizFormQuestionContainer