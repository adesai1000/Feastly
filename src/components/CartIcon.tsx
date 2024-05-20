'use client'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
  return (
    <div className='flex items-center'>
        <Link href='/cart'>Cart (3)</Link>
    </div>
  )
}

export default CartIcon