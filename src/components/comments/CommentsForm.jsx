import React, { useState } from 'react'

export default function CommentsForm({btnLabel, formSubmitHandler}) {
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
          className='w-full focus:outline-none' 
          placeholder='Leave your comment here..' 
        />
        <button className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2'>{btnLabel}</button>
      </div>
    </form>
  )
}
