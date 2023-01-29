import React from 'react'

function FlexCenter({ className, children }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
        {children}
    </div>
  )
}

export default FlexCenter