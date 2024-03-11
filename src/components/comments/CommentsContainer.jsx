import React from 'react'
import CommentsForm from './CommentsForm'

export default function CommentsContainer({className}) {
  return (
    <div className={`${className}`}>
      <CommentsForm btnLabel={'Send'} />
    </div>
  )
}
