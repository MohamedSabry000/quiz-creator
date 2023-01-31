import React from 'react'
import FlexBetween from '../../../flex/FlexBetween'

function QuizFormElement({
    label,
    className,
    children
}) {
  return (
    <FlexBetween className={`${className} mt-2`}>
        <label htmlFor={label?.toLowerCase()} className='font-semibold text-sm md:text-base'>{label}: </label>
        <div className='flex-1 ml-4 w-full'>
            {children}
        </div>
    </FlexBetween>
  )
}

export default QuizFormElement