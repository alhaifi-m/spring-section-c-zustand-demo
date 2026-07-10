'use client'
import Link from 'next/link'

import React from 'react'

const Navbar = () => {
  return (
    <header className='border-b border-gray-200 bg-white px-6 py-4'>
        <div className='mx-auto flex text-lg font-bold max-w-5xl items-center justify-between'>
            <div>
                <h1 className='text-lg font-bold text-gray-900'>Zustand Demo</h1>
                <p>CPRG 306 - Web Development 2</p>
            </div>

            <nav className='flex items-center gap-6 text-sm font-medium text-gray-600'>
                <Link href='/' className='hover:text-blue-600'>Counter</Link>
                <Link href='/cart' className='hover:text-blue-600'> Shop &amp; Cart</Link>
                
            </nav>
        </div>
      
    </header>
  )
}

export default Navbar
