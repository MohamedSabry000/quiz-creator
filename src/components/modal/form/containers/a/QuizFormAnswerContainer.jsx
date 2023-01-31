import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup  } from '@mui/material'
import QuizFormElement from '../QuizFormElement'
import QuizInput from '../QuizInput'
import FlexCenter from '../../../../flex/FlexCenter'
import StudentAnswer from '../../../../StudentAnswer';

function QuizFormAnswerContainer({
    className,
    answers,
    setAnswers,
}) {
    const [newA, setNewA] = useState({
        id: answers? answers.length : 0,
        text: '',
        is_true: false
    })
    const [aId, setAId] = useState(answers? answers.length : 0)

    const handleAddAnswer = () => {
        if(!newA.text) return
        setAnswers([...answers, {...newA, id: aId}])
        // setA([...a, {...newA, id: aId}])
        setAId(aId + 1)
        setNewA({
            id: aId + 1,
            text: '',
            is_true: false
        })
    }


  return (
    !setAnswers ? (
        <StudentAnswer answers={answers} onClick={() => {}}/>
    ) : (
        <div className=''>
            <QuizFormElement label='Answer'>
                <QuizInput
                    name='Answer'
                    id='Answer'
                    value={newA.text}
                    onChange={e => setNewA({...newA, text: e.target.value})}
                />
            </QuizFormElement>
            <FlexCenter>
                <Button
                    variant='contained'
                    color='secondary'
                    className='!mt-4 !p-2 !py-1 !px-2 !text-xs'
                    onClick={handleAddAnswer}
                >
                    Add This Answer
                </Button>
            </FlexCenter>
            <AnswerView answers={answers} setAnswers={setAnswers}/>
        </div>
    )
  )
}

export default QuizFormAnswerContainer

const AnswerView = ({answers, setAnswers}) => {

    const handleAnswerClick = (e) => {
        const id = e.target.value
        const tempA = answers.map(ans => {
            if( `${ans.id}` === `${id}` ) return {...ans, is_true: true}
            return {...ans, is_true: false}
        }) // reset all answers to false
        setAnswers(tempA)
    }

    const handleDeleteAnswer = (id) => {
        const tempA = answers.filter(ans => `${ans.id}` !== `${id}`)
        setAnswers(tempA)
    }

    const getDefaultValue = () => {
        const tempA = answers.find(ans => ans.is_true)
        return tempA ? tempA.id+'' : ''
    }

    return (
        <FormControl className='w-full'>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={getDefaultValue()}
                name="radio-buttons-group"
                className='!grid grid-cols-1 md:grid-cols-2 gap-4 w-full'
            >
                {answers.map((answer, index) => (
                    <div key={index} className='relative'>
                        <FormControlLabel 
                            value={answer.id+''} 
                            control={<Radio />} 
                            label={answer?.text} 
                            onClick={handleAnswerClick}
                        />
                        <button 
                            variant='contained' 
                            className='!absolute !top-[50%] !right-0 !p-0 !px-0 !text-xs -translate-y-[50%] !mr-2 !rounded-full w-6 h-6 !bg-red-500 flex justify-center items-center'
                            onClick={() => handleDeleteAnswer(answer.id)}
                        >
                            <DeleteIcon className='text-white w-5 h-5' fontSize='small' />
                        </button>
                        
                    </div>
                ))}
            </RadioGroup>
        </FormControl>
    )
}