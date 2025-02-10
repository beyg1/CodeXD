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
          className={`inline-block text-lg text-white py-4 px-8 rounded-full bg-gradient-to-r from-white/10 to-white/30 backdrop-blur-sm backdrop-hue-rotate-0 shadow-2xl hover:animate-pulse hover:font-bold hover:bg-transparent hover:border-white hover:border-2 ${className || ""}`}>
            {children}
        </a>
    )
}


