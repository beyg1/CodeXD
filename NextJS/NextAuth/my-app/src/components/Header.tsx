//use client;
import React from 'react';
import Link from 'next/link';
//import { useSession } from 'next-auth/react'; // if it's clientside, use useSession() to get the session
import { auth } from '../../auth';

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
            className="rounded-full border transition-colors duration-200 bg-gray-100 hover:bg-blue-300 px-4 py-4"
          >
            Dashboard(Protected Route)
          </Link>
          <Link
            href="/"
            className="rounded-full border transition-colors duration-200 bg-gray-100 hover:bg-red-300 px-4 py-4"
          >
            SignOut
          </Link>
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
