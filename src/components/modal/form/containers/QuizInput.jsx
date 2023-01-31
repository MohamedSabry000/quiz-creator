import React from 'react'

const inputStyle = 'w-full border-b border-gray-300 py-2 px-4 focus:outline-none focus:border-amber-400 transition duration-300 ease-in-out text-sm md:text-base'

function QuizInput({
    className,
    type,
    name,
    id,
    value,
    readOnly,
    onChange,
}) {
    return (
        <input
            type={type || "text"}
            name={name}
            className={`${inputStyle} ${className}`}
            id={id}
            value={value}
            readOnly={readOnly}
            onChange={onChange}
        />
    )
}

export default QuizInput