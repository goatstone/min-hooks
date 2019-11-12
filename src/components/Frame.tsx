import React from 'react'

function Frame({ className, children }: any) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Frame
