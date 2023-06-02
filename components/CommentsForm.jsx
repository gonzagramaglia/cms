import React, { useRef, useState, useEffect } from 'react'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  function handleCommentSubmission() {
     
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8' >
        <h3 className='text-xl mb-8 font-semibold border-b pb-4' >
            CommentsForm 
        </h3>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea 
            ref={commentEl} 
            className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Your Comment'
            name='comment'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <input 
            type="text" 
            ref={nameEl} 
            className='py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Your Name'
            name='name'
          />
          <input 
            type="text" 
            ref={emailEl} 
            className='py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Your Email'
            name='email'
          />
        </div>
        { error && <p className='text-xs text-red-500' >All fields are required.</p> }
        <div className='mt-8' >
          <button
            type='button'
            onClick={handleCommentSubmission}
            className='transition duration-500 ease hover:bg-emerald-700 inline-block bg-emerald-500 text-white text-lg rounded-full px-8 py-3 cursor-pointer'
          >
          Submit Comment
          </button>
          {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500' >Comment Submited for Review</span>}
        </div>
    </div>
  )
}

export default CommentsForm 