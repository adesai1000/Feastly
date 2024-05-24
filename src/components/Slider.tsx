'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const data = [
  {
    id:1,
    title: "Eat Mor Chikin!",
    image: "/slide1.png"
  },
  {
    id:2,
    title: "You're my Chick-fill-A!",
    image: "/slide2.png"
  },
  {
    id:1,
    title: "CHICK-FILL-AAAAH!",
    image: "/slide3.png"
  },
]

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0)
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:flex-row'>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-chick-red">
            <h1 className='text-5xl font-bold text-center'>Eat Mor Chikin!</h1>
            <button className='bg-chick-red text-white p-5 rounded-full text-xl font-bold hover:bg-[#e51736 ee]'>Order Now!</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="w-full h-1/2 relative">
            <Image src='/slide3.jpeg' width={800} height={800} alt='HomePage Image' className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider