import React from 'react'
import Link from 'next/link'
import { bloggersID } from '@/bloggersID'

function page() {
  return (
    <div className='flex gap-4 p-60'>
      {bloggersID.map((item,index)=>(<Link className='px-10 text-3xl font-bold text-red-400' key={item.id} href={`/bloggers/${item.id}`}>{item.name}</Link>))}
    </div>
  )
}

export default page
