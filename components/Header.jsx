import React from 'react'
import Link from 'next/link'

const Header = ()  => {
    return (
        <header className='bg-[#14110F] py-4'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <Link href="/"><h1 className='text-2xl text-[#F3F3F4] uppercase font-bold'>Define Creative</h1></Link>
                    <ul className='flex justify-end items-center font bold space-x-5 trackign-wide uppercase font-bold  ransition duration-300 group text-[#F3F3F4]'>
                        <li className='z'><Link href='/' className=''>Home</Link></li>
                        <li><Link href='/'>About</Link></li>
                        <li><Link href='/'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )

} 

export default Header;