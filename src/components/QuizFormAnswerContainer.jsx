import React from 'react'
import QuizFormElement from './QuizFormElement'

function QuizFormAnswerContainer({
    className,
    answers,
    setAnswers,
}) {

  return (
    <div className=''>
        {/* <QuizFormElement label='Answer 1'>
            <QuizInput
                name='Answer 1'
                id='Answer 1'
                value={q?.answers[0]?.text}
                readOnly={setQuestion? false : true}
                onChange={e => setQ({...q, answers: [{...q.answers[0], text: e.target.value}]})}
            />
        </QuizFormElement>
        <FlexCenter>
            <Button
                variant='contained'
                color='secondary'
                className='!mt-4 !p-2 !py-1 !px-2 !text-xs'
                // onClick={handleAddQuestion}
            >
                Add This Answer
            </Button>
        </FlexCenter> */}
    </div>
  )
}

export default QuizFormAnswerContainer