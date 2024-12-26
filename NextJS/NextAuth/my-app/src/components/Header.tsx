import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-300 border-b shadow-md rounded-full">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex space-x-2 m-4">
          <Link
            href="/"
            className="font-bold rounded-full border transition-colors duration-200 bg-gray-100 hover:bg-orange-300 px-4 py-4"
          >
            Home
          </Link>
        </div>
        <div className="flex space-x-2 mx-4">
          <Link
            href="/dashboard"
            className="rounded-full border transition-colors duration-200 bg-gray-100 hover:bg-blue-300 px-4 py-4"
          >
            Dashboard
          </Link>
          <Link
            href="/login"
            className="rounded-full border transition-colors duration-200 bg-gray-100 hover:bg-teal-300 px-4 py-4"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
