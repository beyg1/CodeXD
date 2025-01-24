import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='p-40 text-xl'>
      Having Trouble? Contact Support here!
      <ul>
        <li className='font-bold underline'><Link href="/support/support1">dynamic support 1</Link></li>
        <li className='font-bold underline'><Link href="/support/support2">dynamic support 2</Link></li>
        <li className='font-bold underline'><Link href="/support/support3">dynamic support 3</Link></li>
      </ul>
    </div>
  )
}

export default page
