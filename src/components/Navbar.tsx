import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='h-14 text-chick-red p-4 flex justify-between items-center shadow-md'>
            {/* Logo
            Mobile Menu */}
            <Link href="/" className='pt-1 pb-1 pl-1 sm:hidden'>
            <Image src="/Chick-fil-A-Logo.png" alt='Chick-Fill-A Logo' height={80} width={80}/>
            </Link>
            
            <Link href="/" className='pt-1 pb-1 pl-1 hidden md:block'>
            <Image src="/Chick-fil-A-Logo.wine.svg" alt='Chick-Fill-A Logo' height={120} width={120}/>
            </Link>
            <div>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar