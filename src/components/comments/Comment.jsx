import {images} from '../../constants';
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi";
import CommentsForm from './CommentsForm';

export default function Comment({
    commentData, 
    loggedInUserId, 
    setAffectedComment, 
    affectedComment,
    addComment, 
    parentId = null}) {

  const isUserLoggedIn = Boolean(loggedInUserId);
  const commentBelongsToUser = loggedInUserId === commentData.user._id;
  const isReplying = affectedComment && affectedComment.type === 'replying' && affectedComment._id === commentData._id;
  const repliedCommentId = parentId ? parentId : commentData._id;
  const replyOnUserId = commentData.user._id;


  return (
    <div className='flex flex-nowrap items-start gap-x-3 bg-[#f2f4f5] p-3 rounded-lg'>
        <img src={images.PostImage_1} alt="" className='w-9 h-9 object-cover rounded-full' />

        <div className='flex flex-1 flex-col'>
            <h5 className='font-bold text-dark-hard text-xs'>{commentData.user.name}</h5>
            <span className='text-xs text-dark-light'>{new Date(commentData.createdAt).toLocaleDateString("en-US", {day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit'})}</span>
            <p className='font-opensans mt-[10px] text-dark-light'>{commentData.desc}</p>
            <div className='flex items-center gap-x-3 text-dark-light font-roboto text-sm mt-3 mb-3'>
                { isUserLoggedIn &&  (
                    <button className='flex items-center space-x-2' onClick={() => setAffectedComment({type: 'replying', _id: commentData._id})}>
                        <FiMessageSquare className='w-4 h-auto' />
                        <span>Reply</span>
                    </button>
                )}

                {commentBelongsToUser && (
                    <>
                        <button className='flex items-center space-x-2'>
                            <FiEdit2 className='w-4 h-auto' />
                            <span>Edit</span>
                        </button>
                        <button className='flex items-center space-x-2'>
                            <FiTrash className='w-4 h-auto' />
                            <span>Delete</span>
                        </button>
                    </>
                )}
                
            </div>
            {isReplying && (
                <CommentsForm 
                    btnLabel={'reply'} 
                    formSubmitHandler={(value) => addComment(value, repliedCommentId, replyOnUserId)}
                    formCancelHandler={() => setAffectedComment(null)} />
            )}
        </div>
    </div>
  )
}
