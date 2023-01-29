import React from 'react'

function FlexBetween({ className, children }) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
        {children}
    </div>
  )
}

export default FlexBetween