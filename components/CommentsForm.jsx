import React, { useState, useEffect } from 'react';

import { submitComment } from '@/services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleCommentSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8' >
        <h3 className='text-xl mb-8 font-semibold border-b pb-4' >
            Share Your Comment 
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          <input 
            type="text" 
            value={formData.name}
            onChange={onInputChange}
            className='py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Your Name'
            name='name'
          />
          <input 
            type="email" 
            value={formData.email}
            onChange={onInputChange}
            className='py-3 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Your Email'
            name='email'
          />
        </div>
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <textarea 
            value={formData.comment}
            onChange={onInputChange}
            className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
            placeholder='Your Comment'
            name='comment'
          />
        </div>
        { error && <p className='text-xs text-red-500' >All fields are required.</p> }
        <div className='grid grid-cols-1 gap-4 mb-4'>
          <div>
            <input checked={formData.storeData} type="checkbox" onChange={onInputChange} id="storeData" name="storeData" value="true" />
            <label className='text-gray-400 cursor-pointer ml-2' htmlFor='storeData' >Save my name and email for the next time I comment</label>
          </div>
        </div>
        <div className='mt-8' >
          <button
            type='button'
            onClick={handleCommentSubmission}
            className='transition duration-500 ease hover:bg-emerald-700 inline-block bg-emerald-500 text-white text-lg rounded-full px-8 py-3 cursor-pointer'
          >
          Submit
          </button>
          {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500' >Comment Submited for Review</span>}
        </div>
    </div>
  )
}

export default CommentsForm 