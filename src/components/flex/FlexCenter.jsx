import React from 'react'

function FlexCenter({ className, style, children }) {
  return (
    <div className={`flex justify-center items-center ${className}`} style={style || {}}>
        {children}
    </div>
  )
}

export default FlexCenter