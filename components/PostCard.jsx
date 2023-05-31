import React from 'react'

const PostCard = ({ post  }) => {
  return (
    <div>
        <h2 className='font-bold '>{post.title}</h2>
        <h6>{post.excerpt}</h6>
    </div>
  )
}

export default PostCard