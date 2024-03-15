import React, { useEffect, useState } from 'react'
import CommentsForm from './CommentsForm'
import { getCommentsData } from '../../data/comments'
import Comment from './Comment';

export default function CommentsContainer({className, loggedInUserId}) {
  const [comments, setComments] = useState([]);
  const mainComments = comments.filter(comment => comment.parent === null);
  const [affectedComment, setAffectedComment] = useState(null);

  useEffect(() => {
    (async() => {
      const commentData = await getCommentsData();
      setComments(commentData)
    })()
  }, [])

  const addCommentsHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
        user: {
          _id: "a",
          name: "Mohammad Rezaii",
        },
        desc: value,
        post: "1",
        parent: parent,
        replyOnUser: replyOnUser,
        createdAt: new Date().toISOString(),
    }
    setComments(currentState => {
      return [newComment, ...currentState]
    })
    setAffectedComment(null)
  }

  const updateCommentHandler = (value, commentId) => {
    const updatedComments = comments.map(comment => {
      if(comment._id === commentId) {
        return {...comment, desc: value}
      }
      return comment;
    })

    setComments(updatedComments);
    setAffectedComment(null);
  }

  const deleteCommentHandler = (commentId) => {
    const updatedComments = comments.filter(comment => {
      return comment._id !== commentId
    })
    setComments(updatedComments);
  }

  const getRepliesHandler = (commentId) => {
    return comments.filter(comment => comment.parent === commentId).sort((a, b) => {
      return (
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
    });
  }

  console.log(comments)

  return (
    <div className={`${className}`}>
      <CommentsForm btnLabel={'Send'} formSubmitHandler={(value) => addCommentsHandler(value)} />

      <div className='space-y-4 mt-8'>
        {mainComments.map(comment => (
          <Comment 
            key={comment._id}
            commentData={comment} 
            loggedInUserId={loggedInUserId} 
            affectedComment={affectedComment} 
            setAffectedComment={setAffectedComment} 
            addComment={addCommentsHandler}
            updateComment={updateCommentHandler}
            deleteComment={deleteCommentHandler}
            replies={getRepliesHandler(comment._id)}
          />
        ))}
      </div>
    </div>
  )
}
