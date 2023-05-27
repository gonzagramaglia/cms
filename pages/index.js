import { Inter } from 'next/font/google'
import { FaGithub } from 'react-icons/fa';
import logo from '../public/logo.png';
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container mx-auto px-10 b-8'>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/react-logo.png'/>
      </Head>
      <nav className='sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-{#050816}'>
        <a 
            href="https://www.gonza.uno/" 
            target="_blank"
        >
            <img src={logo} alt="logo" className='' /> 
        </a>
        <a 
            href="https://github.com/gonzagramaglia/blog" 
            className='github-logo-container'
            target="_blank"
        >
            <FaGithub size={23} style={{ color: '#a9a6c3' }} />
        </a>
    </nav>
      <h1 className='text-[20px] mt-[200px]'>UNDER CONSTRUCTION</h1>
    </div>
  )
}
