import Image from 'next/image'
import React from 'react'

const Slider = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-chick-red">
            <h1 className='text-5xl font-bold'>Eat Mor Chikin!</h1>
            <button className='bg-chick-red text-white p-5 rounded-full text-xl font-bold hover:bg-red-600'>Order Now!</button>
        </div>
        {/* IMAGE CONTAINER */}
        <div className="w-full h-1/2 relative">
            <Image src='/slide3.jpeg' width={1000} height={1000} alt='HomePage Image' className='object-cover'/>
        </div>
    </div>
  )
}

export default Slider