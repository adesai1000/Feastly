'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  {
    id:1,
    title: "Eat Mor Chikin!",
    image: "/slide1.jpeg"
  },
  {
    id:2,
    title: "You're my Chick-fill-A!",
    image: "/slide2.jpeg"
  },
  {
    id:3,
    title: "CHICK-FILL-AAAAH!",
    image: "/slide3.jpeg"
  },
]

const Slider = () => {
  // const [currentSlide, setCurrentSlide] = useState(0)
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //   setCurrentSlide(prev=>(prev === data.length -1 ? 0 : prev+1))
  //   },2000)
  //   return ()=> clearInterval(interval)
  // },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row'>
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex items-center justify-center flex-col gap-8 text-chick-red px-4 md:px-10 lg:px-10">
            <h1 className='text-5xl font-bold text-center p-4 md:p-10 lg:p-10'>You're my Chick-fill-A!</h1>
            <button className='bg-chick-red text-white px-8 py-4 rounded-full text-xl font-bold transition-transform transform hover:scale-105'>
                Order Now!
            </button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="w-full flex-1 relative lg:h-full lg:w-1/2 flex items-center justify-center p-4">
            <div className='relative w-full h-full lg:mt-14 rounded-xl overflow-hidden shadow-lg'>
                <Image src='/slide2.jpeg' layout='fill' objectFit='cover' alt='HomePage Image' className=''/>
            </div>
        </div>
    </div>
  )
}

export default Slider