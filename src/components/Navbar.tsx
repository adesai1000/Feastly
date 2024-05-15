import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='h-16 text-chick-red p-4 flex justify-between items-center shadow-md'>
            {/* Logo
            Mobile Menu */}
            <Link href="/" className='pt-1 pb-1 pl-1'>
            <Image src="/Chick-fil-A-Logo.png" alt='Chick-Fill-A Logo' height={90} width={90}/>
            </Link>
            <div>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar