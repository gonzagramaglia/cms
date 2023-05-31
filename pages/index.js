import { FaGithub } from 'react-icons/fa';
import Head from 'next/head'

import { PostCard, Categories, PostWidget } from '@/components';

const posts = [
  {
    title: 'TailwindCSS',
    excerpt: 'Learn TailwindCSS basics'
  },
  {
    title: 'Habits',
    excerpt: 'How to build great Habits'
  }
];

export default function Home() {
  return (
    <>
        <Head>
          <title>Blog</title>
          <link rel='icon' href='https://i.postimg.cc/nzNvhVb8/react-logo.png'/>
        </Head>
        <div className='container mx-auto px-10 mb-8 bg-gray-700 '>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
            <div className='lg:col-span-8 col-span-1'>
              {posts.map( (post, index) => (
                  <PostCard post={post} key={post.title} />
                ))}
            </div>
            <div className='lg:col-span-4 col-span-1 ' >
              <div className='lg:sticky relative top-8'>
                <PostWidget />
                <Categories />
              </div>

            </div>
          </div>
        </div>
    </>
  )
}
