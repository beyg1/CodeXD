import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>
      <header className='flex text-justify text-2xl font-medium'>These are the Blog Categories:</header>
      <div className='px-16 py-56'>
      <Link href="/categories/IT" className='p-10 text-xl  text-blue-500'>IT Blogs </Link>
      <Link href="/categories/Lifestyle" className='p-10 text-xl  text-red-700'>Lifestyle Blogs </Link>
      <Link href="/categories/Politics" className='p-10 text-xl text-teal-500'>Politics Blogs </Link>
      </div>
    </div>
    
     
  )
}

export default page
