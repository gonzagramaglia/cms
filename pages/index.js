  import { FaGithub } from 'react-icons/fa';
import Head from 'next/head'

const posts = [
  {
    title: 'TailwindCSS',
    excerpt: 'Learn TailwindCSS'
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
        <nav className='w-full h-[80px] md:h-[110px] flex items-center bg-[#050816]'>
          <a 
              href="https://www.gonza.gr/" 
              className='ml-[20px] md:ml-[65px]'
              target="_blank"

          >
              <img src='https://i.postimg.cc/9z5zvr3M/logo.png' alt="logo" className='h-[20px] md:h-[25px]' /> 
          </a>
          <a 
              href="https://github.com/gonzagramaglia/links" 
              className='ml-auto mr-[20px] md:mr-[65px]'
              target="_blank"
          >
              <FaGithub size={23} style={{ color: '#a9a6c3' }} />
          </a>
        </nav>
        <div className='container mx-auto px-10 mb-8 bg-gray-700 '>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
            <div className='lg:col-span-8 col-span-1'>
              {posts.map( (post, index) => (
                  <div>
                    <h2 className='font-bold '>{post.title}</h2>
                    <h6>{post.excerpt}</h6>
                  </div>
                ))}
            </div>
            <div className='lg:col-span-4 col-span-1 ' >
              <div className='lg:sticky relative top-8'>

              </div>

            </div>
          </div>
        </div>
    </>
  )
}
