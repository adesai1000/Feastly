import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-chick-red flex items-center justify-between shadow-md'>
            <Link href='/'>
            <Image src="/Chick-fil-A-Logo.wine.svg" alt='Chick-Fill-A Logo' height={120} width={120}/>
            </Link>
            <p>© All Rights Reserved by CFA Properties, Inc.</p>
        </div>
    )
}

export default Footer