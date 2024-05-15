'use client'
import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Menu = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
        {!open?(<RxHamburgerMenu className='text-chick-red size-6' onClick={()=> setOpen(true)}/>
        ):(
            <MdClose className='text-chick-red size-6' onClick={()=>setOpen(false)}/>
        )}
    
    </div>
  )
}

export default Menu