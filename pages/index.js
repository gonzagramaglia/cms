import { Inter } from 'next/font/google'
import { FaGithub } from 'react-icons/fa';
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container mx-auto px-10 b-8'>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/react-logo.png'/>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>

      </div>
    </div>
  )
}
