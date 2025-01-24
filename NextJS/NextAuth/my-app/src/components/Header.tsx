//use client;
import React from 'react';
import { signOutUser } from '@/app/actions/authActions';
import Link from 'next/link';
//import { useSession } from 'next-auth/react'; // if it's clientside, use useSession() to get the session
import { auth } from '../../auth';
import { Button } from './ui/button';


export default async function Header(){
  //const { data: session } = useSession(); //use useSession() and store it in a variable if it's clientside
  const session = await auth();
  console.log(session);
  
  return (
    <header className="bg-slate-300 border-b shadow-md rounded-full">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-2 m-4">
          <Link
            href="/"
            className="font-bold rounded-full border transition-colors duration-200 bg-gray-100 hover:bg-orange-300 px-4 py-4"
          >
            AuthJs
          </Link>
        </div>
        <div className="flex space-x-2 mx-4">
         {session?.user ? (
          <>
          <Link
            href="/dashboard"
            className="rounded-full text-black border transition-colors duration-200 bg-gray-100 hover:bg-blue-300 px-4 py-4"
          >
            Dashboard(Protected Route)
          </Link>
          <form action={signOutUser} >
            <Button className="rounded-full text-black border transition-colors duration-200 bg-gray-100 hover:bg-teal-300 px-4 py-6"  type="submit">
              SignOut
            </Button>
          </form>
          </>) : (
          <Link
            href="/auth/login"
            className="rounded-full border transition-colors duration-200 bg-gray-100 hover:bg-teal-300 px-4 py-4"
          >
            Login
          </Link>)}
        </div>
      </nav>
    </header>
  );
};
