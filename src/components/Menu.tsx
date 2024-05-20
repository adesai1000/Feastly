'use client'
import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Link from 'next/link';
import CartIcon from './CartIcon';


const links = [
    {id:1, title:"Home", url:"/"},
    {id:2, title:"Menu", url: "/"},
    {id:3, title:"Stores", url:"/"},
    {id:4, title:"Contact", url:"/"}
]

const user = false;

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        {!open?(<RxHamburgerMenu className='text-chick-red size-6' onClick={()=> setOpen(true)}/>
        ):(
            <MdClose className='text-chick-red size-6' onClick={()=>setOpen(false)}/>
        )}
        
    <div className='bg-chick-red text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10 pt-10 uppercase'>
        {links.map((item)=>(
            <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
        ))}
        {!user?(<Link href='/login'>Login</Link>
        ):(
        <Link href='/orders'>Orders</Link>)}
        <Link href="/cart"><CartIcon /></Link>

    </div>
    </div>
  )
}

export default Menu