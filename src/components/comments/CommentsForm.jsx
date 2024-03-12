import React, { useState } from 'react'

export default function CommentsForm({btnLabel, formSubmitHandler, formCancelHandler = null}) {
  const [value, setValue] = useState("")
  const submitHandler = e => {
    e.preventDefault();
    formSubmitHandler(value);
    setValue('');

  }

  return (
    <form className='' onSubmit={submitHandler}>
      <div className='flex flex-col items-end border border-primary rounded-lg p-4 '>
        <textarea 
          onChange={e => setValue(e.target.value)} 
          value={value} 
          rows="5" 
          className='w-full focus:outline-none bg-transparent' 
          placeholder='Leave your comment here..' 
        />
        <div className='flex items-center gap-x-2 pt-2'>
          {formCancelHandler && (
            <button onClick={formCancelHandler} className='px-6 py-2.5 rounded-lg border-red-500 border text-red-500'>Cancel</button>
          )}
          <button className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold'>{btnLabel}</button>
        </div>
      </div>
    </form>
  )
}
