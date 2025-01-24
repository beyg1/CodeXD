import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function page() {
  return (
    <div className='flex justify-center items-center flex-col bg-stone-300 h-screen'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      
    </div>
  )
}
