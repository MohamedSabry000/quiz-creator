import React, { useState } from 'react'
import QuizFormElement from './QuizFormElement'
import QuizInput from './QuizInput'
import FlexCenter from './flex/FlexCenter'
import { Button } from '@mui/material'
import QuizFormAnswerContainer from './QuizFormAnswerContainer'

function QuizFormQuestionContainer({
    className,
    question,
    setQuestion,
}) {

    const [q, setQ] = useState({...question})

  return (
    <div className='mt-2 bg-gray-300 px-4 py-2 rounded-md'>
        <QuizFormElement label='Question'>
            <QuizInput
                name="question"
                id="question"
                value={q.question}
                readOnly={setQuestion? false : true}
                onChange={e => setQ({...q, text: e.target.value})}
            />
        </QuizFormElement> 
        <div className=''>
            <QuizFormElement label='Feedback in case of True'>
                <QuizInput
                    name='Feedback in case of True'
                    id='Feedback in case of True'
                    value={q?.feedback_true}
                    readOnly={setQuestion? false : true}
                    onChange={e => setQ({...q, feedback_true: e.target.value})}
                />
            </QuizFormElement>
            <QuizFormElement label='Feedback in case of False'>
                <QuizInput
                    name='Feedback in case of False'
                    id='Feedback in case of False'
                    value={q?.feedback_false}
                    readOnly={setQuestion? false : true}
                    onChange={e => setQ({...question, feedback_false: e.target.value})}
                />
            </QuizFormElement>
        </div> 
        <div className=''>
            <FlexCenter className={"mt-3 text-gray-700 underline relative"}>
                <h3 className='font-semibold text-sm md:text-base'>Answers:</h3>
            </FlexCenter>
            <QuizFormAnswerContainer />
        </div>     
    </div>
  )
}

export default QuizFormQuestionContainer