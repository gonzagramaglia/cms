import { Inter } from 'next/font/google'
import { FaGithub } from 'react-icons/fa';
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
          <title>Blog</title>
          <link rel='icon' href='/react-logo.png'/>
        </Head>
        <nav className='w-full h-[110px] flex items-center fixed top-0 z-20 bg-[#050816]'>
          <a 
              href="https://www.gonza.uno/" 
              className='pl-[65px]'
              target="_blank"

          >
              <img src='/logo.png' alt="logo" className='h-[25px]' /> 
          </a>
          <a 
              href="https://github.com/gonzagramaglia/blog" 
              className='ml-auto mr-[65px]'
              target="_blank"
          >
              <FaGithub size={23} style={{ color: '#a9a6c3' }} />
          </a>
        </nav>
        <div className='container mx-auto px-10 b-8'>
        </div>
    </>
  )
}
