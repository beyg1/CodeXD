import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {
  return (
    <div className='flex  items-center flex-col bg-sky-200 h-screen'> These are custom designed tailwind buttons
      <button className='p-4 m-5 rounded-full bg-red-600 text-indigo-50 hover:text-2xl'>Button1</button>
      <button className='p-4 m-5 rounded-full bg-green-600 text-indigo-50 hover:text-2xl'>Button2</button>
      <button className='p-4 m-5 rounded-full bg-blue-600 text-indigo-50 hover:text-2xl'>Button3</button>
      Now are the shadCn buttons as reuseable components.
      <Button className='m-5' variant="ghost" size="default" >Button1</Button>
      <Button className='m-5' variant="destructive" size="sm" >Button2</Button>
      <Button className='m-5' variant="link" size="icon">Button3</Button>
      <Button className='m-5' variant="secondary">Button4</Button>
      <Button className='m-5' variant="default" size="lg">Button5</Button>
      {/* You can style your own buttons by tailwind and save it in variants */}
    </div>
         
  )
}
