import React from 'react'

function FlexBetween({ className, style, children }) {
  return (
    <div className={`flex justify-between items-center ${className}`} style={style || {}}>
        {children}
    </div>
  )
}

export default FlexBetween