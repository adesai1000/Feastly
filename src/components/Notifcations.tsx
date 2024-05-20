'use client'
import React, { useEffect, useState } from 'react'
import { MdClose } from "react-icons/md";

const Notifcations = () => {

  return (
      <div className='relative h-10 bg-chick-red text-white px-4 flex items-center justify-center text-center md:text-base text-sm shadow-md border-1 border-black'>
        <span>Free Delivery for orders above $50! <span className='hover:underline cursor-pointer ml-1'>Order Now</span></span>
        <div className='absolute right-0 pr-2 text-xl'>
        </div>
      </div>
  )
}

export default Notifcations;
