import React from 'react';
import Menu from './Menu';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const user = false;
    return (
        <div className='h-14 text-chick-red p-4 flex justify-between items-center shadow-md lg:px-20 xl:px-40 border-b-2 border-chick-red'>
            {/* LEFT LINKS */}
            <div className='hidden md:flex gap-4 flex-1 font-semibold'>
                <Link href='/' className='hover:underline'>Home</Link>
                <Link href='/menu'className='hover:underline'>Menu</Link>
                <Link href='/contact' className='hover:underline'>Contact</Link>
            </div>
            {/* Logo
            Mobile LOGO */}
            <Link href="/" className='pt-1 pb-1 pl-1 sm:hidden'>
                <Image src="/Chick-fil-A-Logo.png" alt='Chick-Fill-A Logo' height={80} width={80}/>
            </Link>
            {/* PC LOGO */}
            <div className='flex-1 flex justify-center'>
                <Link href="/" className='pt-1 pb-1 pl-1 hidden md:block'>
                    <Image src="/Chick-fil-A-Logo.wine.svg" alt='Chick-Fill-A Logo' height={120} width={120}/>
                </Link>
            </div>
            {/* Mobile Menu */}
            <div className='md:hidden'>
                <Menu />
            </div>
            {/* RIGHT LINKS */}
            <div className='hidden md:flex gap-4 flex-1 justify-end font-semibold'>
                {!user ? (<Link href='/Login' className='hover:underline'>Login</Link>) : (
                    <Link href='/order' className='hover:underline'>Orders</Link>
                )}
                <Link href='/contact' className='hover:underline'>Cart</Link>
            </div>
        </div>
    );
}

export default Navbar;
