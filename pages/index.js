import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container mx-auto px-10 b-8'>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/react-logo.png'/>
      </Head>
      <h1 className='mt-16 text-3xl'>Hello Next!</h1>
    </div>
  )
}
