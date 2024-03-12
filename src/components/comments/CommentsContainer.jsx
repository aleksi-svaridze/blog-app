import React, { useEffect, useState } from 'react'
import CommentsForm from './CommentsForm'
import { getCommentsData } from '../../data/comments'
import Comment from './Comment';

export default function CommentsContainer({className, loggedInUserId}) {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter(comment => comment.parent === null);

  useEffect(() => {
    (async() => {
      const commentData = await getCommentsData();
      setComments(commentData)
    })()
  }, [])

  const addCommentsHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: "10",
        user: {
          _id: "a",
          name: "Mohammad Rezaii",
        },
        desc: value,
        post: "1",
        parent: parent,
        replyOnUser: replyOnUser,
        createdAt: "2022-12-31T17:22:05.092+0000",
    }
    setComments(currentState => {
      return [newComment, ...currentState]
    })
  }

  return (
    <div className={`${className}`}>
      <CommentsForm btnLabel={'Send'} formSubmitHandler={(value) => addCommentsHandler(value)} />

      <div className='space-y-4 mt-8'>
        {mainComments.map(comment => (
          <Comment commentData={comment} loggedInUserId={loggedInUserId}/>
        ))}
      </div>
    </div>
  )
}
