import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

import Link from 'next/link';

import { getCategories } from '@/services';


const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
        .then( (newCategories) => setCategories(newCategories) )
    }, [])

    return (
        <>
            <nav id='navbar' className='w-full h-[80px] md:h-[110px] flex items-center bg-[#050816] fixed z-20'>
            <a 
                href="https://www.gonza.gr/" 
                className='ml-[20px] md:ml-[65px]'
                target="_blank"

            >
                <img src='https://i.postimg.cc/9z5zvr3M/logo.png' alt="logo" className='h-[20px] md:h-[25px]' /> 
            </a>
            <a 
                href="https://github.com/gonzagramaglia/blog" 
                className='ml-auto mr-[20px] md:mr-[65px]'
                target="_blank"
            >
                <FaGithub size={23} style={{ color: '#a9a6c3' }} />
            </a>
            </nav>
            <div className='container mx-auto px-10 mb-8 pt-28' >
                <div className='border-b w-full inline-block border-blue-400 py-8' >
                    <div className='md:float-left block'>
                        <Link href="/">
                            <span className='cursor-pointer font-bold text-4xl text-white' >
                                Blog
                            </span>
                        </Link>
                    </div>
                    <div className='hidden md:float-left md:contents'>
                        {
                            categories.map( (category) => (
                                <Link key={category.slug} href={`category/${category.slug}`}>
                                    <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer' >
                                        {category.name}
                                    </span>
                                </Link>
                            ) )
                        }
                    </div>
                </div>
            </div>
        </>
  )
}

export default Header