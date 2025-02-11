import React from 'react'
import { PropsWithChildren } from 'react';

interface ButtonPrimaryProps {
  className?: string;
  href?: string;
  target?: string;
}

export default function ButtonPrimary({ children, className, href, target }: PropsWithChildren<ButtonPrimaryProps>) {
    return (
      <a 
      href={href}
      target={target}
      className={`inline-block text-lg text-white py-4 px-8 rounded-full border-2 border-transparent bg-white bg-opacity-20 backdrop-blur-sm  shadow-2xl hover:animate-pulse font-medium hover:bg-transparent hover:border-white hover:border-2 ${className || ""}`}>
        {children}
    </a>
    )
}


