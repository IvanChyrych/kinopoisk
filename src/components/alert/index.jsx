import React from 'react'

export const Alert = (props) => {
  const className = `alert alert-${props.type}`
  return (
    <div className={className} role="alert">
      {props.children}
    </div>
  )
}
