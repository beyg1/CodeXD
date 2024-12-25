import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-zinc-400 border-b shadow-md rounded-full">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-2 m-4">
          <Link
            href="/"
            className="text-gray-800 font-bold hover:bg-gray-700 rounded-full border "
            style={{ backgroundColor: '#f3f4f6', padding: '1.5rem' }}
          >
            Home
          </Link>
        </div>
        <div className="flex space-x-2 mx-4">
          <Link
            href="/dashboard"
            className="text-gray-800 hover:bg-gray-300 rounded-full border "
            style={{ backgroundColor: '#f3f4f6', padding: '1.5rem' }}
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className="text-gray-800 hover:bg-gray-300 rounded-full border  "
            style={{ backgroundColor: '#f3f4f6', padding: '1.5rem' }}
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
